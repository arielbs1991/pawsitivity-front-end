import React, { Component } from "react";
import { Layout } from 'antd';
import './Swipe.css'
import MatchesComp from "../components/Matches";
import userAPI from "../utils/userAPI";
import matchAPI from "../utils/matchAPI";
import petAPI from "../utils/petAPI";
import HeaderComp from "../components/Header";
const { Content } = Layout;

class Matches extends Component {

  state = {
    matchesResult: [],
    queryResult: []
  }

  componentDidMount() {
    this.gatherUserAndPetfinderInfo()
  }

  gatherUserAndPetfinderInfo = async () => {
    let { data: { petfinderMatches } } = await matchAPI.getMatchInfo()
    this.setState({ matchesResult: petfinderMatches })
    const queryResultCopy = [...this.state.queryResult]
    const matchesResultCopy = [...this.state.matchesResult]
    return matchesResultCopy.forEach(async ({ id, PetfinderId, isLiked }) => {
      if (isLiked) {
        let { data } = await petAPI.byId(PetfinderId)
        queryResultCopy.push({ ...data, id, isLiked })
        this.setState({ queryResult: queryResultCopy })
      }
    })
  }

  unmatch = async (e) => {
    const queryResultCopy = [...this.state.queryResult]
    const isLikedObj = { isLiked: false }
    const id = e.target.id
    await matchAPI.updatePetfinderMatch(id, isLikedObj)
    let filteredResults = queryResultCopy.filter(pet => {
      if (parseInt(id) !== parseInt(pet.id)) return true
    })
    this.setState({ queryResult: filteredResults })
  }

  contactShelter = async (e) => {
    const queryResultCopy = [...this.state.queryResult]
    const selectedPet = queryResultCopy.filter(pet => {
      if (parseInt(e.target.id) === parseInt(pet.animal.id)) return true
    })
    const petObject = {
      petName: selectedPet[0].animal.name,
      shelterEmail: selectedPet[0].animal.contact.email
    }
    return await userAPI.sendEmail(petObject)
  }

  renderPets = () => {
    return this.state.queryResult.map(pet =>
      <MatchesComp
        key={pet.animal.id}
        id={pet.animal.id}
        matchId={pet.id}
        imgSrc={pet.animal.photos[0].full}
        name={pet.animal.name}
        breed={pet.animal.breeds.primary}
        breedTwo={pet.animal.breeds.secondary}
        age={pet.animal.age}
        gender={pet.animal.gender}
        size={pet.animal.size}
        address1={pet.animal.contact.address.address1}
        address2={pet.animal.contact.address.address2}
        city={pet.animal.contact.address.city}
        state={pet.animal.contact.address.state}
        postcode={pet.animal.contact.address.postcode}
        handleContactClick={this.contactShelter}
        handleDislikeClick={this.unmatch}
      />)
  }

  render() {
    return (
      <Layout>
        <HeaderComp />
        <Content >
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div className="matchMe"
            >{this.renderPets()}
            </div>
          </div>
        </Content>
      </Layout>
    )
  }
}

export default Matches;
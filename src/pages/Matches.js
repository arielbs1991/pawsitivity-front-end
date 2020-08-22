import React, { Component, useState } from "react";
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
    let { data: { userId } } = await userAPI.getCurrentUserInfo()
    let { data: { userData: { Matches } } } = await matchAPI.getMatchInfo(userId)
    this.setState({ matchesResult: Matches })
    const queryResultCopy = [... this.state.queryResult]
    const matchesResultCopy = [... this.state.matchesResult]
    matchesResultCopy.forEach(async ({ id, petfinderId }) => {
      let { data } = await petAPI.byId(petfinderId)
      queryResultCopy.push({ ...data, id })
      this.setState({ queryResult: queryResultCopy })
    })

  }

  unmatch = async (e) => {
    let id = e.target.id
    const isLikedObj = { isLiked: false }
    return await matchAPI.updateMatch(id, isLikedObj)
  }

  contactShelter = async (e) => {
    const queryResultCopy = [... this.state.queryResult]
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
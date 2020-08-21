import React, { Component, useState } from "react";
import { Layout } from 'antd';
import './Swipe.css'
import MatchesComp from "../components/Matches";
import userAPI from "../utils/userAPI";
import matchAPI from "../utils/matchAPI";
import petAPI from "../utils/petAPI";

const { Content } = Layout;

class Matches extends Component {

  state = {
    matchesResult: [],
    queryResult: []
  }

  componentDidMount() {
    userAPI.getCurrentUserInfo().then(res => {
      console.log(res.data)
      matchAPI.getMatchInfo(res.data.userId).then(res => {
        console.log(res.data)
        this.setState({
          matchesResult: res.data.userData.Matches
        })
        this.queryPetFinder()
      }).catch(err => {
        console.log(err)
      })
    })
  }

  queryPetFinder = () => {
    const queryResultCopy = [... this.state.queryResult]
    this.state.matchesResult.forEach(match => {
      petAPI.byId(match.petfinderId).then(res => {
        queryResultCopy.push(res.data)
        this.setState({
          queryResult: queryResultCopy
        })
      })
    });
  }

  handleClick = (e) => {
    const queryResultCopy = [... this.state.queryResult]
    const selectedPet = queryResultCopy.filter(pet => {
      if (parseInt(e.target.id) === parseInt(pet.animal.id)) return true
    })

    const petObject = {
      petName: selectedPet[0].animal.name,
      shelterEmail: selectedPet[0].animal.contact.email
    }

    userAPI.sendEmail(petObject).catch(err=> console.log(err))
  }

  

  renderPets = () => {
    return this.state.queryResult.map(pet =>
      <MatchesComp
        key={pet.animal.id}
        id={pet.animal.id}
        imgSrc={pet.animal.photos[0].full}
        name={pet.animal.name}
        breed={pet.animal.breeds.primary}
        breedTwo={pet.animal.breeds.secondary}
        age={pet.animal.age}
        gender={pet.animal.gender}
        size={pet.animal.size}
        handleClick={this.handleClick}
      />)
  }

  render() {
    return (
      <Layout>
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
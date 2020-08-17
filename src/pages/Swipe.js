import React, {Component, useState} from "react";
import { Layout} from 'antd';
import AnimalCardComp from "../components/animalCard"
import './Swipe.css'
import petAPI from "../utils/petAPI";
import matchAPI from "../utils/matchAPI";

const { Content } = Layout;


class Swipe extends Component {
state={
  dogs:[],
  cats:[]
}

// petAPI.petSearch().then(res =>{
//   this.setState({
//     dogs:res
//   })
// })

componentDidMount() {
  petAPI.petSearch().then(res =>{
    this.setState({
      dogs:res.data
    })
  })
}

onLikeButtonClick = () => {
  // matchAPI.saveMatch(this.state.dogs[0].id)
  let newDogArray = [... this.state.dogs]
  newDogArray.shift()
  this.setState({dogs:newDogArray})
}

onDislikeButtonClick = () => {
  let newDogArray = [... this.state.dogs]
  newDogArray.shift()
  this.setState({dogs:newDogArray})
  console.log(newDogArray)
}

render(){
  return (

    <Layout>
        <Content >
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
  {this.state.dogs.length>0?<AnimalCardComp like={this.onLikeButtonClick} dislike={this.onDislikeButtonClick} name={this.state.dogs[0].name} imageSrc = {this.state.dogs[0].primary_photo_cropped.full}   />:<img src={"https://home.ask.vet/images/loading-dog.gif"} className="tableImage"/>}
            {/* <AnimalCardComp  name={"this.state.dogs[0].name"} imageSrc = {"this.state.dogs[0].primary_photo_cropped.small"}   /> */}
          </div>
        </Content>
    </Layout>
  );}
}

export default Swipe;
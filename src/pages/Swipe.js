import React, {Component, useState} from "react";
import { Layout} from 'antd';
import AnimalCardComp from "../components/animalCard"
import './Swipe.css'
import petAPI from "../utils/petAPI";
import matchAPI from "../utils/matchAPI";
import userAPI from "../utils/userAPI";

const { Content } = Layout;


class Swipe extends Component {
state={
  dogs:[],
  cats:[],
  userId:"",
  likedPets:[]
}

// petAPI.petSearch().then(res =>{
//   this.setState({
//     dogs:res
//   })
// })

componentDidMount() {
  userAPI.getCurrentUserInfo().then(res =>{
    console.log(res.data)
    this.setState({
      userId:res.data.userId
    })
  })
  
  petAPI.petSearch().then(res =>{
    this.setState({
      dogs:res.data
    })
  })
}

onLikeButtonClick = () => {
  let newDogArray = [... this.state.dogs]
  const dogObject = {
    petfinderId:newDogArray[0].id,
<<<<<<< HEAD
    isLiked:true
=======
    isLiked:true,
>>>>>>> dev
  }
  matchAPI.saveMatch(dogObject)
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
  {this.state.dogs.length>0?<AnimalCardComp like={this.onLikeButtonClick} dislike={this.onDislikeButtonClick} dog={this.state.dogs[0]}  imageSrc = {this.state.dogs[0].photos[0].small?this.state.dogs[0].primary_photo_cropped.full:"https://dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg"}  />:<img src={"https://home.ask.vet/images/loading-dog.gif"} className="tableImage"/>}
            {/* <AnimalCardComp  name={"this.state.dogs[0].name"} imageSrc = {"this.state.dogs[0].primary_photo_cropped.small"}   /> */}
          </div>
        </Content>
    </Layout>
  );}
}

export default Swipe;
import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";
import "./style.css"
import petAPI from "../../utils/petAPI"
import userAPI from "../../utils/userAPI";
import matchAPI from "../../utils/matchAPI";
let lat;
  let lng;
 let gatherUserAndPetfinderInfo = async () => {
  let { data: { userId } } = await userAPI.getCurrentUserInfo()
  let { data: { userData: { Matches } } } = await matchAPI.getMatchInfo(userId)
  let queryResultCopy =[]
    Matches.forEach(async ({ id, petfinderId, isLiked }) => {
    if (isLiked) {
      let { data } = await petAPI.byId(petfinderId)
      queryResultCopy.push({ ...data, id, isLiked })
      // console.log(queryResultCopy[0]);
     
    }
  })
  console.log(queryResultCopy);
  // return queryResultCopy[0]
  Geocode.setApiKey("AIzaSyDY_RILuF7Xq-yurPfk5rC1kNfdBzK2VU0");
  
  Geocode.setLanguage("en");
  
  Geocode.setRegion("us");
  
  //this will need to pull in the shelter's address and get passed into the function
   Geocode.fromAddress(queryResultCopy[0].animal.contact.address.address1).then(
    response => {
      console.log(response.results[0].geometry.location)
      lat = response.results[0].geometry.location.lat;
      lng = response.results[0].geometry.location.lng;
      console.log(lat, lng); //this needs to then be passed down into the render map
    },
    error => {
      console.error(error);
    }
  );
  
}
gatherUserAndPetfinderInfo()  
// let  run = async() =>{
//   const myRes = await gatherUserAndPetfinderInfo()
// console.log(myRes);
 
// }
// run()
// console.log(lat);


export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ height: '30vh', width: '30%' }}
        initialCenter={{ //this should also be the shelter location passed in as variables from the geocode function
          lat: lat,
          lng: lng
        }}
        zoom={10}
        onClick={this.onMapClicked}
      >
        <Marker
          name={'Location'} //these need to be shelters' locations, passed in as variables from the geocode function
          position={{ lat, lng}} />
        <Marker />
      </Map>
    );
  }
}

//find a way to hide these keys
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDY_RILuF7Xq-yurPfk5rC1kNfdBzK2VU0'
})(MapContainer)
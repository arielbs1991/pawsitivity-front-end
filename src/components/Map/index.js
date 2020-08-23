import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";
import "./style.css"
let lat;
let lng;

export class MapContainer extends Component {
  componentDidMount() {
    // if (!this.props.address1) this.props.address1=''
    // if (!this.props.address2) this.props.address2=''
    // if (!this.props.state) this.props.state=''
    // if (!this.props.postcode) this.props.postcode=''
    // if (!this.props.city) this.props.city=''

    const addressString = `${this.props.address1}${this.props.address2}${this.props.city}${this.props.postcode}${this.props.state}`
    console.log(addressString)
    console.log(this.props.address1, this.props.address2, this.props.city, this.props.state, this.props.postcode)
    Geocode.setApiKey("AIzaSyDY_RILuF7Xq-yurPfk5rC1kNfdBzK2VU0");
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    //this will need to pull in the shelter's address and get passed into the function
    Geocode.fromAddress(`${this.props.address1}${this.props.city}${this.props.state}${this.props.postcode}`).then(
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

  render() {
    return (
      <div className="mapHolder">
        <Map
          google={this.props.google}
          initialCenter={{ //this should also be the shelter location passed in as variables from the geocode function
            lat: lat,
            lng: lng
          }}
          zoom={10}
          onClick={this.onMapClicked}
        >
          <Marker
            name={'Location'} //these need to be shelters' locations, passed in as variables from the geocode function
            position={{ lat, lng }} />
          <Marker />
        </Map>
      </div>
    );
  }
}
//find a way to hide these keys
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDY_RILuF7Xq-yurPfk5rC1kNfdBzK2VU0'
})(MapContainer)
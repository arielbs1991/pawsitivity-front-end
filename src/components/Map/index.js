import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";
import "./style.css"

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: 0, lng: 0 };
  }
  
  componentDidMount() {
    let lat;
    let lng;

    Geocode.setApiKey("AIzaSyDY_RILuF7Xq-yurPfk5rC1kNfdBzK2VU0");
    Geocode.setLanguage("en");
    Geocode.setRegion("us");

    //this will need to pull in the shelter's address and get passed into the function
    Geocode.fromAddress(`${this.props.address1}${this.props.city}${this.props.state}${this.props.postcode}`).then(
      response => {
        lat = response.results[0].geometry.location.lat;
        lng = response.results[0].geometry.location.lng;
        this.setState({ lat, lng })
      },
      error => {
        console.error(error);
      }
    );
  }

  render() {

    return (
      <>
        {this.state.lat ?
          <div className="mapHolder">
            <Map
              google={this.props.google}
              initialCenter={{ //this should also be the shelter location passed in as variables from the geocode function
                lat: this.state.lat,
                lng: this.state.lng
              }}
              zoom={10}
              onClick={this.onMapClicked}
            >
              <Marker
                name={'Location'} //these need to be shelters' locations, passed in as variables from the geocode function
                position={{ lat: this.state.lat, lng: this.state.lng }} />
              <Marker />
            </Map>
          </div>
          : <></>
        }
      </>
    );
  }
}

//find a way to hide these keys
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDY_RILuF7Xq-yurPfk5rC1kNfdBzK2VU0'
})(MapContainer)
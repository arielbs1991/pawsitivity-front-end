import React, { Component } from "react";
import { Input, Select, Form, Checkbox } from 'antd'
import { Redirect } from 'react-router-dom'
import "./style.css";
import userAPI from "../../utils/userAPI";

class InitForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    postcode: "",
    phoneNumber: "",
    hasKids: false,
    hasCats: false,
    hasDogs: false,
    species: "dog"
  };

  handleCheckboxInput = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    userAPI.createUser({
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      city:this.state.city,
      state:this.state.state,
      postcode:this.state.postcode,
      phoneNumber:this.state.phoneNumber,
      hasKids:this.state.hasKids,
      hasCats:this.state.hasCats,
      hasDogs:this.state.hasDogs,
      whichSpecies:"dogs"
    })
    return <Redirect to ="/Swipe"/>
  };

  render() {
    return (

      <form className="form">
        <h1 align="center">Welcome To Pawsitivity</h1>
        <h3>Let's Learn A Little More About You </h3>
        <br />
        <Input
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleInputChange}
          type="text"
          placeholder={"First Name"}
        />
        <Input
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <Input
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          type="text"
          placeholder="E-mail"
        />
        <Input
          value={this.state.city}
          name="city"
          onChange={this.handleInputChange}
          type="text"
          placeholder="City"
        />
        <Input
          value={this.state.state}
          name="state"
          onChange={this.handleInputChange}
          type="text"
          placeholder="State"
        />
        <Input
          value={this.state.postcode}
          name="postcode"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Postal Code"
        />
        <Input
          value={this.state.phoneNumber}
          name="phoneNumber"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Phone Number"
        />
        <br/>
        <Checkbox
          type="checkbox"
          checked={this.state.hasKids}
          name="hasKids"
          onChange={this.handleCheckboxInput}
        >I have children at home.
        </Checkbox> <br/>
        <Checkbox
          type="checkbox"
          checked={this.state.hasCats}
          name="hasCats"
          onChange={this.handleCheckboxInput}
        >I have cats at home.
        </Checkbox><br/>
        <Checkbox
          type="checkbox"
          checked={this.state.hasDogs}
          name="hasDogs"
          onChange={this.handleCheckboxInput}
        >I have dogs at home.
        </Checkbox>
        {/* <Checkbox
          type="checkbox"
          checked={this.state.species}
          name="species"
          onChange={this.handleCheckboxInput}
        >I'm looking for a dog.
        </Checkbox> */}

        <br />
        <br />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>

    );
  }
}

export default InitForm;

import React, { Component } from "react";
import "./style.css";

class InitForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email:"",
    city:"",
    state:"",
    postalCode:"",
    phoneNumber:"",
    hasKids:"",
    hasCats:"",
    hasDogs:"",
    species:""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
      firstName: "",
      lastName: "",
      email:"",
      city:"",
      state:"",
      postalCode:"",
      phoneNumber:"",
      hasKids:"",
      hasCats:"",
      hasDogs:"",
      species:""
    });
  };

  render() {
    return (

        <form className="form">
            <h1 align="center">Welcome To Pawsitivity</h1>
             <h3>Let's Learn A Little More About You</h3>
             <br/>
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="E-mail"
          />
          <input
            value={this.state.city}
            name="city"
            onChange={this.handleInputChange}
            type="text"
            placeholder="City"
          />
          <input
            value={this.state.state}
            name="state"
            onChange={this.handleInputChange}
            type="text"
            placeholder="State"
          />
          <input
            value={this.state.postalCode}
            name="postalCode"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Postal Code"
          />
          <input
            value={this.state.phoneNumber}
            name="phoneNumber"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Phone Number"
          />
          <input
            value={this.state.hasKids}
            name="hasKids"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Has Kids?  Not sure how to do this one"
          />
          <input
            value={this.state.hasCats}
            name="hasCats"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Has Cats?  Not sure how to do this one"
          />
          <input
            value={this.state.hasDogs}
            name="hasDogs"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Has Dogs?  Not sure how to do this one"
          />
          <input
            value={this.state.species}
            name="species"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Preferred species?  Not sure how to do this one"
          />
          <br/>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>

    );
  }
}

export default InitForm;

import React, { Component } from "react";
import { Input, Checkbox } from 'antd'
import { Redirect } from 'react-router-dom'
import "./style.css";
import animalAPI from "../../../utils/animalAPI";

class AnimalInitForm extends Component {
  state = {
    name: "",
    type: "",
    location: "",
    imageSrc: "",
    breed: '',
    secondaryBreed: "",
    age: "",
    sex: "",
    size: "",
    bio: "",
    likesKids: 'false',
    likesCats: 'false',
    likesDogs: 'false',
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

  handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!this.state.name) this.setState({ errorSpan: 'Please enter a name.' });
    if (!this.state.type) this.setState({ errorSpan: 'Please enter the type of animal.' });
    if (!this.state.imageSrc) this.setState({ errorSpan: 'Please enter an image or link to an image' });
    if (!this.state.location) this.setState({ errorSpan: 'Please enter the state this animal is in' });
    if (!this.state.breed) this.setState({ errorSpan: 'Please enter a primary breed' });
    if (!this.state.secondaryBreed) this.setState({ errorSpan: 'Please enter a secondary breed.' });
    if (!this.state.age) this.setState({ errorSpan: "Please enter animal's age." });
    if (!this.state.sex) this.setState({ errorSpan: "Please enter animal's sex." });
    if (!this.state.size) this.setState({ errorSpan: "Please enter animal's size."});
    if (!this.state.bio) this.setState({ errorSpan: "Please enter a brief bio for this animal."});

    await animalAPI.createAnimal(this.state)
    this.setState({ redirect: '/shelteranimals' })
  };

  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirect} />
    return (

      <form className="form">
        <h3 align="center">Available for Adoption</h3>
        <br />
        <Input
          value={this.state.name}
          name="name"
          onChange={this.handleInputChange}
          type="text"
          placeholder={"Name"}
        />
        <Input
          value={this.state.type}
          name="type"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Animal Type"
        />
        <Input
          value={this.state.location}
          name="location"
          onChange={this.handleInputChange}
          type="text"
          placeholder="State"
        />
        <Input
          value={this.state.imageSrc}
          name="imageSrc"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Image"
        />
        <Input
          value={this.state.breed}
          name="breed"
          onChange={this.handleInputChange}
          type="breed"
          placeholder="Breed"
        />
        <Input
          value={this.state.secondaryBreed}
          name="secondaryBreed"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Secondary Breed"
        />
        <Input
          value={this.state.age}
          name="age"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Age"
        />
        <Input
          value={this.state.sex}
          name="sex"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Sex"
        />
        <Input
          value={this.state.size}
          name="size"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Size"
        />
        <Input
          value={this.state.bio}
          name="bio"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Brief Bio"
        />
        <Checkbox
          type="checkbox"
          name="likesKids"
          onChange={this.handleCheckboxInput}
        >Good around children!
        </Checkbox> <br />
        <Checkbox
          type="checkbox"
          name="likesCats"
          onChange={this.handleCheckboxInput}
        >Good around cats!
        </Checkbox><br />
        <Checkbox
          type="checkbox"
          name="likesDogs"
          onChange={this.handleCheckboxInput}
        >Good around dogs!
        </Checkbox>
        <div className="center">
        <button className="input submit" onClick={this.handleFormSubmit}><strong>Submit</strong></button>
        </div>
      </form>

    );
  }
}

export default AnimalInitForm;

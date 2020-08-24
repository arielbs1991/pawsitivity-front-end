import React, { Component } from "react";
import { Input, Checkbox, Button } from 'antd'
import { Redirect } from 'react-router-dom'
import "./style.css";
import animalAPI from "../../../utils/animalAPI";

class InitForm extends Component {
  state = {
    name: "",
    type: "",
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
    // AnimalMatchId: this.AnimalMatchId
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

//   catButton = (e) => {
//     e.preventDefault()
//     this.setState({ AnimalMatchId: 'cat' })
//   }

//   dogButton = (e) => {
//     e.preventDefault()
//     this.setState({ AnimalMatchId: 'dog' })
//   }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!this.state.name) this.setState({ errorSpan: 'Please enter a name.' });
    if (!this.state.type) this.setState({ errorSpan: 'Please enter the type of animal.' });
    if (!this.state.imageSrc) this.setState({ errorSpan: 'Please enter an image or link to an image' });
    if (!this.state.breed) this.setState({ errorSpan: 'Please enter a primary breed' });
    if (!this.state.secondaryBreed) this.setState({ errorSpan: 'Please enter a secondary breed.' });
    if (!this.state.age) this.setState({ errorSpan: "Please enter animal's age." });
    if (!this.state.sex) this.setState({ errorSpan: "Please enter animal's sex." });
    if (!this.state.size) this.setState({ errorSpan: "Please enter animal's size."});
    if (!this.state.bio) this.setState({ errorSpan: "Please enter a brief bio for this animal."});

    await animalAPI.createAnimal(this.state)
    //TODO:Decide which page to redirect to after animal creation
    this.setState({ redirect: '/swipe' })
  };

  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirect} />
    return (

      <form className="form">
        <h1 align="center">Enter A New Animal Available for Adoption</h1>
        {/* <h3>Let's Learn A Little More About You </h3> */}
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
        <br />
        <Checkbox
          type="checkbox"
          // checked={this.state.likesKids}
          name="likesKids"
          onChange={this.handleCheckboxInput}
        >This animal is good with children. If unsure, leave unchecked.
        </Checkbox> <br />
        <Checkbox
          type="checkbox"
          // checked={this.state.likesCats}
          name="likesCats"
          onChange={this.handleCheckboxInput}
        >This animal is good with cats. If unsure, leave unchecked.
        </Checkbox><br />
        <Checkbox
          type="checkbox"
          // checked={this.state.likesDogs}
          name="likesDogs"
          onChange={this.handleCheckboxInput}
        >This animal is good with dogs. If unsure, leave unchecked.
        </Checkbox>
        {/* <Checkbox
          type="checkbox"
          checked={this.state.species}
          name="species"
          onChange={this.handleCheckboxInput}
        >I'm looking for a dog.
        </Checkbox> */}
{/* 
        <br />
        <br />
        <span style={{ color: 'red' }}>{this.state.errorSpan}</span>
        <span>I am looking for a: </span>
        <Button style={{ margin: '.25rem' }} onClick={this.catButton}><i className="fas fa-cat"></i></Button>
        <Button style={{ margin: '.25rem' }} onClick={this.dogButton}><i className="fas fa-dog"></i></Button>
        <br /> */}
        <Button onClick={this.handleFormSubmit}>Submit</Button>

      </form>

    );
  }
}

export default InitForm;

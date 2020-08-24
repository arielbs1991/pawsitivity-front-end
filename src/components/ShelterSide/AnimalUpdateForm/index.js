import React, { Component } from 'react';
import { Input, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom'
import animalAPI from "../../../utils/animalAPI"
import "./style.css"

class AnimalUpdateForm extends Component {
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
        likesKids: '',
        likesCats: '',
        likesDogs: '',
        active: false
    }

    componentDidMount() {
        // animalAPI.findOneShelterAnimal().then(res => {
        //     console.log(res.data)
        this.setState({
            name: this.props.name,
            type: this.props.type,
            location: this.props.location,
            imageSrc: this.props.imageSrc,
            breed: this.props.breed,
            secondaryBreed: this.props.secondaryBreed,
            age: this.props.age,
            sex: this.props.sex,
            size: this.props.size,
            bio: this.props.bio,
            likesKids: this.props.likesKids,
            likesCats: this.props.likesCats,
            likesDogs: this.props.likesDogs,
            id: this.props.id
        })
        // })
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        await animalAPI.updateAnimal(this.state.id, this.state);
        this.setState({ redirect: '/shelteranimals' })
        window.location.reload()
    }

    handleCheckboxInput = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({ [e.target.name]: value });
    }

    handleDeleteButton = async event => {
        event.preventDefault();
        await animalAPI.deleteAnimal(this.state.id);
        this.setState({ redirect: '/shelteranimals' })
        window.location.reload();
    }

    setActiveButton(whichSpecies) {
        this.setState({ isActive: whichSpecies })
    }

    render() {
        if (this.state.redirect) return <Redirect to={this.state.redirect} />
        return (
            <form 
            // className="form"
            >
                {/* <h3 align="center">Update Animal Details</h3>
                <br /> */}
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
                    placeholder="imageSrc"
                />
                <Input
                    value={this.state.breed}
                    name="breed"
                    onChange={this.handleInputChange}
                    type="text"
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
                    placeholder="Animal Age"
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
                    checked={this.state.likesKids}
                    name="likesKids"
                    onChange={this.handleCheckboxInput}
                >Good with children
        </Checkbox> <br />
                <Checkbox
                    type="checkbox"
                    checked={this.state.likesCats}
                    name="likesCats"
                    onChange={this.handleCheckboxInput}
                >Good with cats
        </Checkbox><br />
                <Checkbox
                    type="checkbox"
                    checked={this.state.likesDogs}
                    name="likesDogs"
                    onChange={this.handleCheckboxInput}
                >Good with dogs
        </Checkbox>
                <div className="center remove">
                    <button className="update" onClick={this.handleFormSubmit}><strong>Update</strong></button>
                </div>
                <div className="center remove">
                    <button className="unmatch" onClick={this.handleDeleteButton}>REMOVE ANIMAL</button>
                </div>
            </form>
        )
    }
}

export default AnimalUpdateForm;

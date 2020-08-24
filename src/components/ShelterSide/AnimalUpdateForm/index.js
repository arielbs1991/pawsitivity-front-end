import React, { Component } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom'
import animalAPI from "../../../utils/animalAPI"

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
        animalAPI.findAllShelterAnimals().then(res => {
            console.log(res.data)
            this.setState({
                name: res.data[0].name,
                type: res.data[0].type,
                location: res.data[0].location,
                imageSrc: res.data[0].imageSrc,
                breed: res.data[0].breed,
                secondaryBreed: res.data[0].secondaryBreed,
                age: res.data[0].age,
                sex: res.data[0].sex,
                size: res.data[0].size,
                bio: res.data[0].bio,
                likesKids: res.data[0].likesKids,
                likesCats: res.data[0].likesCats,
                likesDogs: res.data[0].likesDogs,
                id: res.data[0].id
            })
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        await animalAPI.updateAnimal(this.state.id);
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
        //TODO: decide where to redirect after updating animal
        this.setState({ redirect: '/shelteranimals' })
        window.location.reload();
    }

    setActiveButton(whichSpecies) {
        this.setState({ isActive: whichSpecies })
    }

    render() {
        if (this.state.redirect) return <Redirect to={this.state.redirect} />
        return (
            <form className="form">
                <h1 align="center">Update Animal Details</h1>
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
                <br />
                <Input
                    value={this.state.sex}
                    name="sex"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Sex"
                />
                <br />
                <Input
                    value={this.state.size}
                    name="size"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Size"
                />
                <br />
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
                    checked={this.state.likesKids}
                    name="likesKids"
                    onChange={this.handleCheckboxInput}
                >Animal likes children.
        </Checkbox> <br />
                <Checkbox
                    type="checkbox"
                    checked={this.state.likesCats}
                    name="likesCats"
                    onChange={this.handleCheckboxInput}
                >Animal likes cats.
        </Checkbox><br />
                <Checkbox
                    type="checkbox"
                    checked={this.state.likesDogs}
                    name="likesDogs"
                    onChange={this.handleCheckboxInput}
                >Animal likes dogs.
        </Checkbox>
                <br />
                <Button onClick={this.handleFormSubmit}>Update</Button>
                <br />
                <br />
                <Button type="danger" onClick={this.handleDeleteButton}>REMOVE ANIMAL</Button>
            </form>
        )
    }
}

export default AnimalUpdateForm;

import React, { Component } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom'
import animalAPI from "../../utils/animalAPI"

class AnimalUpdateForm extends Component {
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
        likesKids: '',
        likesCats: '',
        likesDogs: '',
        active: false
    }

    // componentDidMount() {
    //     animalAPI.findanimalSettings().then(res => {
    //         this.setState({
    //             name: res.data.name,
    //             type: res.data.type,
    //             imageSrc: res.data.imageSrc,
    //             state: res.data.state,
    //             secondaryBreed: res.data.secondaryBreed,
    //             age: res.data.age,
    //             size: res.data.size,
    //             bio: res.data.bio,
    //             sex: res.data.sex,
    //             whichSpecies: res.data.whichSpecies,
    //             animalId: res.data.id
    //         })
    //     })
    // }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    // catButton = (e) => {
    //     e.preventDefault()
    //     this.setState({ whichSpecies: 'cat' })
    // }

    // dogButton = (e) => {
    //     e.preventDefault()
    //     this.setState({ whichSpecies: 'dog' })
    // }

    handleCheckboxInput = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({ [e.target.name]: value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        animalAPI.updateAnimal(this.state);
        //TODO: decide where to redirect after updating animal
        this.setState({ redirect: '/swipe' })
    }

    handleDeleteButton = event => {
        event.preventDefault();
        animalAPI.deleteAnimal(this.state);
        //TODO: decide where to redirect after updating animal
        this.setState({ redirect: '/swipe' })
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
                    placeholder={"First Name"}
                />
                <Input
                    value={this.state.type}
                    name="type"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Last Name"
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
                    placeholder="Postal Code"
                />
                <Input
                    value={this.state.age}
                    name="age"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Phone Number"
                />
                <br />
                <Input
                    value={this.state.sex}
                    name="sex"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Phone Number"
                />
                <br />
                <Input
                    value={this.state.size}
                    name="size"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Phone Number"
                />
                <br />
                <Input
                    value={this.state.bio}
                    name="bio"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Phone Number"
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
                {/* <span>I am looking for a: </span>
                <Button style={{ margin: '.25rem' }} onClick={this.catButton}><i className="fas fa-cat"></i></Button>
                <Button style={{ margin: '.25rem' }} onClick={this.dogButton}><i className="fas fa-dog"></i></Button>
                <br /> */}
                <Button onClick={this.handleFormSubmit}>Update</Button>
                <br />
                <br />
                <Button danger onClick={this.handleDeleteButton}>REMOVE ANIMAL</Button>
            </form>
        )
    }
}

export default AnimalUpdateForm;

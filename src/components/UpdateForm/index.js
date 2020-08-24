import React, { Component } from 'react';
import { Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom'
import userAPI from "../../utils/userAPI"
import "./style.css"

class UpdateForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        postcode: "",
        phoneNumber: "",
        hasKids: "",
        hasDogs: "",
        hasCats: "",
        whichSpecies: "",
        userId: "",
        active:false
    }

    componentDidMount() {
        userAPI.findUserSettings().then(res => {
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                city: res.data.city,
                state: res.data.state,
                postcode: res.data.postcode,
                phoneNumber: res.data.phoneNumber,
                hasCats: res.data.hasCats,
                hasDogs: res.data.hasDogs,
                hasKids: res.data.hasKids,
                whichSpecies: res.data.whichSpecies,
                userId: res.data.id
            })
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    catButton = (e) => {
        e.preventDefault()
        this.setState({ whichSpecies: 'cat' })
    }

    dogButton = (e) => {
        e.preventDefault()
        this.setState({ whichSpecies: 'dog' })
    }

    handleCheckboxInput = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({ [e.target.name]: value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        userAPI.editAll(this.state);
        this.setState({ redirect: '/swipe' })
    }

    setActiveButton(whichSpecies){
        this.setState({ isActive: whichSpecies})
    }

    render() {
        if (this.state.redirect) return <Redirect to={this.state.redirect} />
        return (
            <form className="form">
                <h1 align="center">Update Profile</h1>
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
                <br />
                <Checkbox
                    type="checkbox"
                    checked={this.state.hasKids}
                    name="hasKids"
                    onChange={this.handleCheckboxInput}
                >I have children at home.
        </Checkbox> <br />
                <Checkbox
                    type="checkbox"
                    checked={this.state.hasCats}
                    name="hasCats"
                    onChange={this.handleCheckboxInput}
                >I have cats at home.
        </Checkbox><br />
                <Checkbox
                    type="checkbox"
                    checked={this.state.hasDogs}
                    name="hasDogs"
                    onChange={this.handleCheckboxInput}
                >I have dogs at home.
        </Checkbox>

                <br />
                <br></br>
                <span>Looking For: </span>
                <Button style={{ margin: '.25rem' }} onClick={this.catButton}><i className="fas fa-cat"></i></Button>
                <Button style={{ margin: '.25rem' }} onClick={this.dogButton}><i className="fas fa-dog"></i></Button>
                <br />
                <br></br>
                <div className="center">
                <button className="update" onClick={this.handleFormSubmit}><strong>Update</strong></button>
                </div>
            </form>
        )
    }
}

export default UpdateForm;

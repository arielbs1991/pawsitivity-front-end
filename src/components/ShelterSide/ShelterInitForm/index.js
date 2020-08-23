import React, { Component } from "react";
import { Input, } from 'antd'
import { Redirect } from 'react-router-dom'
import "./style.css";
import shelterAPI from "../../../utils/shelterAPI";

class ShelterInitForm extends Component {
    state = {
        orgId: "",
        AnimalShelterName: "",
        email: "",
        password: '',
        address1: "",
        address2: "",
        city: "",
        state: "",
        postcode: "",
        phoneNumber: "",
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!this.state.AnimalShelterName) this.setState({ errorSpan: 'Please enter shelter name.' });
        if (!this.state.email) this.setState({ errorSpan: 'Please enter a valid email address' });
        if (!this.state.password) this.setState({ errorSpan: 'Please enter a valid password' });
        if (!this.state.address1) this.setState({ errorSpan: 'Please enter a valid street address.' });
        if (!this.state.city) this.setState({ errorSpan: 'Please enter your city.' });
        if (!this.state.state) this.setState({ errorSpan: 'Please enter a state.' });
        if (!this.state.postcode) this.setState({ errorSpan: 'Please enter a valid postal code.' });
        if (!this.state.phoneNumber) this.setState({ errorSpan: 'Please enter your phone number.' });

        await shelterAPI.createShelter(this.state)
        await shelterAPI.login({
            email: this.state.email,
            password: this.state.password
        })
        //TODO: decide which page shelter login should redirect to
        this.setState({ redirect: '/swipe' })
    };

    render() {
        if (this.state.redirect) return <Redirect to={this.state.redirect} />
        return (

            <form className="form">
                <h1 align="center">Welcome To Pawsitivity</h1>
                <h3>Please Enter Shelter Information </h3>
                <br />
                <Input
                    label="If you know your shelter's Organization ID on PetFinder, please enter it here:"
                    value={this.state.orgId}
                    name="orgId"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder={"Organization ID"}
                />
                <Input
                    value={this.state.AnimalShelterName}
                    name="AnimalShelterName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Shelter Name"
                />
                <Input
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="E-mail"
                />
                <Input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Password"
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
                <button onClick={this.handleFormSubmit}>Submit</button>

            </form>

        );
    }
}

export default ShelterInitForm;

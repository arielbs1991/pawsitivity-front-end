import React, { Component } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import userAPI from "../../utils/userAPI"

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
        userId: ""
    }

    componentDidMount() {
        userAPI.getCurrentUserInfo().then(res => {
            console.log(res.data)
            userAPI.findUser(res.data.userId).then(res => {
                console.log(res.data)
                this.setState({
                    firstName: res.data.userData.firstName,
                    lastName: res.data.userData.lastName,
                    city: res.data.userData.city,
                    state: res.data.userData.state,
                    postcode: res.data.userData.postcode,
                    phoneNumber: res.data.userData.phoneNumber,
                    hasCats: res.data.userData.hasCats,
                    hasDogs: res.data.userData.hasDogs,
                    hasKids: res.data.userData.hasKids,
                    whichSpecies: res.data.userData.whichSpecies,
                    userId: res.data.userData.id
                })
            })
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleCheckboxInput = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({ [e.target.name]: value });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        userAPI.editAll(this.state);
        console.log("click")
        console.log(this.state.firstName)

    }

    render() {
        return (
            <form className="form">
                <h1 align="center">Update your Profile</h1>
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
                {/* <Input
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          type="text"
          placeholder="E-mail"
        /> */}
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
                <br />
                <button onClick={this.handleFormSubmit}>Update</button>
            </form>
        )
    }
}

export default UpdateForm;

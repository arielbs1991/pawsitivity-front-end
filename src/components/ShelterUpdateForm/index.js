import React, { Component } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom'
import shelterAPI from "../../utils/shelterAPI"

class ShelterUpdateForm extends Component {
    state = {
        orgId: "",
        AnimalshelterName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        postcode: "",
        phoneNumber: "",
        shelterId: "",
        active: false
    }

    componentDidMount() {
        shelterAPI.findshelterSettings().then(res => {
            this.setState({
                orgId: res.data.orgId,
                AnimalshelterName: res.data.AnimalshelterName,
                address1: res.data.address1,
                address2: res.data.address2,
                city: res.data.city,
                state: res.data.state,
                postcode: res.data.postcode,
                phoneNumber: res.data.phoneNumber,
                shelterId: res.data.id
            })
        })
    }

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

    // handleCheckboxInput = e => {
    //     const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    //     this.setState({ [e.target.name]: value });
    // }

    handleFormSubmit = event => {
        event.preventDefault();
        shelterAPI.editAll(this.state);
        //TODO: decide which page to redirect to after update
        this.setState({ redirect: '/swipe' })
    }

    // setActiveButton(whichSpecies) {
    //     this.setState({ isActive: whichSpecies })
    // }

    render() {
        if (this.state.redirect) return <Redirect to={this.state.redirect} />
        return (
            <form className="form">
                <h1 align="center">Update Shelter Details</h1>
                <br />
                <Input
                    value={this.state.orgId}
                    name="orgId"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder={"Organization ID"}
                />
                <Input
                    value={this.state.AnimalshelterName}
                    name="AnimalshelterName"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Shelter Name"
                />
                <Input
                    value={this.state.address1}
                    name="address1"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Address 1"
                />
                <Input
                    value={this.state.address2}
                    name="address2"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Address2"
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
                {/* <br />
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
                <span>I am looking for a: </span>
                <Button style={{ margin: '.25rem' }} onClick={this.catButton}><i className="fas fa-cat"></i></Button>
                <Button style={{ margin: '.25rem' }} onClick={this.dogButton}><i className="fas fa-dog"></i></Button>
                <br /> */}
                <Button onClick={this.handleFormSubmit}>Update</Button>
            </form>
        )
    }
}

export default ShelterUpdateForm;

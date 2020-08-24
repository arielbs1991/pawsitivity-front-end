import React, { Component } from 'react';
import { Input } from 'antd';
import { Redirect } from 'react-router-dom'
import shelterAPI from "../../../utils/shelterAPI"

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
        shelterAPI.getShelterData().then(res => {
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

    handleFormSubmit = async event => {
        event.preventDefault();
        await shelterAPI.shelterUpdateAll(this.state);
        this.setState({ redirect: '/shelterprofile' })
        window.location.reload()
    }

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
                <div className="center">
                <button className="update" onClick={this.handleFormSubmit}>
                        <strong>Update</strong>
                </button>
                </div>
            </form>
        )
    }
}

export default ShelterUpdateForm;

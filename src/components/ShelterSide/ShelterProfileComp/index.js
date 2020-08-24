import React, { Component } from 'react';
import shelterAPI from "../../../utils/shelterAPI"
import { Link } from 'react-router-dom'
import "./style.css";


class ShelterProfileComp extends Component {
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

    render() {
        return (
            <div className="form">
                <h1 align="center">
                    {this.state.AnimalshelterName}
                </h1>
                <h3 align="center">
                    {this.state.address1}
                </h3>
                <h3 align="center">
                    {this.state.address2}
                </h3>
                <h3 align="center">
                    {this.state.city}, {this.state.state} {this.state.postcode}
                </h3>
                <h3 align="center">
                    {this.state.phoneNumber}
                </h3>
                <h3 align="center">
                    {this.state.orgId}
                </h3>
                <br />
                <div className="center">
                <button className="update">
                    <Link className="updateBtn" to='/shelterupdate'>
                        <strong>Update Info</strong>
                    </Link>
                </button>
                </div>
            </div>
        )
    }
}

export default ShelterProfileComp;

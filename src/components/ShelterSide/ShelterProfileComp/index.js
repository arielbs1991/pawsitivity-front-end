import React, { Component } from 'react';
import { Button } from 'antd';
import shelterAPI from "../../../utils/shelterAPI"
import { Link } from 'react-router-dom'

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
                <Button align="center" type="primary">
                    <Link to='/shelterupdate'>
                        Update Info
                    </Link>
                </Button>
            </div>
        )
    }
}

export default ShelterProfileComp;

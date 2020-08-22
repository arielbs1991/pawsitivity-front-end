import React, { Component } from 'react';
import { Button } from 'antd'
import shelterAPI from "../../utils/shelterAPI"
import { Link } from 'react-router-dom'
import "./style.css";


class ShelterLogoutComp extends Component {

    state = {
        sessionToken:''
    }

Logout = event => {
    event.preventDefault()
    shelterAPI.logout(this.state).then(res => {
        console.log(res.data)
    })
    this.setState({
        sessionToken:''
    });
    localStorage.clear();
    // return <Redirect to="/Login"/>
}

render(){
    return(
        <div>
            <button className="headerLink" onClick={this.Logout}>
            {/* //want to link to either shelter login or some kind of home page */}
                <Link to="/login">Logout</Link>
            </button>
        </div>
    )
}
}

export default ShelterLogoutComp;
import React, { Component } from 'react';
import shelterAPI from "../../../utils/shelterAPI"
import { Link } from 'react-router-dom'
import "./style.css";


class ShelterLogoutComp extends Component {

    state = {
        sessionToken:''
    }

Logout = event => {
    event.preventDefault()
    shelterAPI.shelterLogout(this.state).then(res => {
        console.log(res.data)
    })
    this.setState({
        sessionToken:''
    });
    localStorage.clear();
}

render(){
    return(
        <div>
            <button className="headerLink" onClick={this.Logout}>
                <Link to="/welcome">Logout</Link>
            </button>
        </div>
    )
}
}

export default ShelterLogoutComp;
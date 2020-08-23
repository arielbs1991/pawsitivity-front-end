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
    shelterAPI.logout(this.state).then(res => {
        console.log(res.data)
    })
    this.setState({
        sessionToken:''
    });
    localStorage.clear();
    // return <Redirect to="/shelterlogin"/>
}

render(){
    return(
        <div>
            <button className="headerLink" onClick={this.Logout}>
            {/* //TODO:want to link to either shelter shelterlogin or some kind of home page */}
                <Link to="/shelterlogin">Logout</Link>
            </button>
        </div>
    )
}
}

export default ShelterLogoutComp;
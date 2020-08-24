import React, { Component } from 'react';
import userAPI from "../../utils/userAPI"
import { Link } from 'react-router-dom'
import "./style.css";


class LogoutComp extends Component {

    state = {
        sessionToken:''
    }

Logout = event => {
    event.preventDefault()
    userAPI.logout(this.state).then(res => {
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
            <button className="headerLink logOutBtn" onClick={this.Logout}>
                <Link to="/welcome">Logout</Link>
            </button>
        </div>
    )
}
}

export default LogoutComp;
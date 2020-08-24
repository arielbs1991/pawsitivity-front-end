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
            <button className="signUp3" onClick={this.Logout}><Link className="signUpBtn3" to="/welcome">Logout</Link></button>
        </div>
    )
}
}

export default LogoutComp;




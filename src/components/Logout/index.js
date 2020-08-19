import React, { Component } from 'react';
import { Button } from 'antd'
import userAPI from "../../utils/userAPI"
import { Redirect } from 'react-router-dom'

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
    return <Redirect to="/Login"/>
}

render(){
    return(
        <div>
            <Button onClick={this.Logout}>Logout</Button>
        </div>
    )
}
}

export default LogoutComp;
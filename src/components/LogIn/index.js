import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import { Input } from 'antd';
import "./style.css";
import userAPI from '../../utils/userAPI.js'


class LogInComp extends Component {
  state = {
    email: "",
    password: "",
    errorSpan: '',
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await userAPI.login(this.state)
      this.setState({ redirect: '/swipe' })
    }
    
    catch {
      this.setState({ errorSpan: 'Login failed. Incorrect username or password.' })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (

      <div className="logInForm">
        <form >
          <h1 align="center">Welcome to Pawsitivity!</h1>
          <h5 align="center">Please Sign Up or Login</h5>
          <Input className="input"
            value={this.state.userName}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <Input className="input"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <span style={{ color: 'red' }}>{this.state.errorSpan}</span>
          <br />
          <br />
          <div className="loginBtns">
            <button className="signUp"><Link className="signUpBtn" to="/profile2"><strong>Sign Up</strong></Link></button>
            <br /><br />
            <button className="loginButton" onClick={this.handleFormSubmit}><strong>Login</strong></button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogInComp;

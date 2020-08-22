import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import { Input } from 'antd';
import "./style.css";
import userAPI from '../../utils/userAPI.js'
import { Button } from 'antd'


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
    if (!this.state.email) this.setState({ errorSpan: 'Please enter an email.' });
    if (!this.state.password) this.setState({ errorSpan: 'Please enter a password.' });

    await userAPI.login(this.state)
    this.setState({ redirect: '/swipe' })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (

      <div className="logInForm">
        <form >
          <h1>Welcome to Pawsitivity</h1>
          <h5>Please Login or Sign Up</h5>
          <Input
            value={this.state.userName}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <Input
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
          <Button><Link className="signUpBtn" to="/profile2">Sign Up</Link></Button>
            <br /><br />
          <Button className="loginButton" onClick={this.handleFormSubmit}>Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogInComp;

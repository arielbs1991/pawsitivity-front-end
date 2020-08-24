import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import { Input } from 'antd';
import "./style.css";
import shelterAPI from '../../../utils/shelterAPI.js'


class ShelterLoginComp extends Component {
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

    await shelterAPI.shelterLogin(this.state)
    //TODO: decide where to redirect shelter after login
    this.setState({ redirect: '/shelteranimals' })
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
            <button  className="signUp"><Link className="signUpBtn" to="/sheltercreate"><strong>Sign Up</strong></Link></button>
            <br /><br />
            <button className="loginButton" onClick={this.handleFormSubmit}><strong>Login</strong></button>
          </div>
        </form>
      </div>
    );
  }
}

export default ShelterLoginComp;

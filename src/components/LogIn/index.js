import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Input } from 'antd';
import "./style.css";
import userAPI from '../../utils/userAPI.js'

class LogInComp extends Component {
  state = {
    email: "",
    password: ""
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.email) {
      alert("Please create an account!");
    } else if (
      !this.state.password
      // this.state.password.length < 6
      ) {
      alert(
        `Choose a more secure password`
      );
    }
    userAPI.login(this.state).then(res => {
      console.log(res.data)
    })
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
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
            placeholder="User Name"
          />
          <Input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          <div className="loginBtns">
            <button className="loginButton" onClick={this.handleFormSubmit}>Login</button>
            <br /><br />
            <Link className="signUpBtn" to="/profile">Sign Up</Link>
          </div>
        </form>



      </div>
    );
  }
}

export default LogInComp;

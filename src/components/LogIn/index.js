import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./style.css";

class LogInComp extends Component {
  state = {
    userName: "",
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
    if (!this.state.userName) {
      alert("Please create a user name!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password`
      );
    }

    this.setState({
      userName: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="logInForm">
        <form >
          <h1>Welcome to Pawsitivity</h1>
          <h5>Please Login or Sign Up</h5>
          <input
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="User Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          <div className="loginBtns">
            <button onClick={this.handleFormSubmit}>Login</button>
            <br/><br/>
            <Link className="signUpBtn" to="/profile">Sign Up</Link>
          </div>
        </form>



      </div>
    );
  }
}

export default LogInComp;

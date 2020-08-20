import React, { Component } from 'react';
import { Form, Input, Button, Select, Checkbox } from 'antd';
import userAPI from "../../utils/userAPI"

class UpdateForm extends Component {
    state = {
        firstName:"",
        lastName:"",
        email:"",
        postcode:"",
        phoneNumber:"",
        hasKids:"",
        hasDogs:"",
        hasCats:"",
        userId:""
    }

    //if value!==placeholder, set state to value, else set state to placeholder

    componentDidMount() {
        userAPI.getCurrentUserInfo().then(res => {
            console.log(res.data)
            this.setState({
                firstName:res.data.firstName,
                lastName:res.data.lastName,
                email:res.data.email,
                postcode:res.data.postcode,
                hasCats:res.data.hasCats,
                hasDogs:res.data.hasDogs,
                hasKids:res.data.hasKids,
                userId:res.data.userId
            })
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target

        this.setState({
             [name]:value
        })
    }

    handleCheckboxInput = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({ [e.target.name]: value });
      }

      handleFormSubmit = event => {
          event.preventDefault();
          userAPI.editUserPostcode({postcode:this.state.postcode});
          userAPI.editUserHasDogs({hasDogs:this.state.hasDogs});
          userAPI.editUserHasCats({hasCats:this.state.hasCats});
          userAPI.editUserHasKids({hasKids:this.state.hasKids});
          userAPI.editUserFirstName({firstName:this.state.firstName});
          userAPI.editUserLastName({lastName:this.state.lastName});
        //   userAPI.editUserPhoneNumber(this.state.phoneNumber)

        console.log("click")
        console.log(this.state.firstName)

      }

    render() {
        return(
            <form className="form">
        <h1 align="center">Update your Profile</h1>
        <br />
        <Input
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleInputChange}
          type="text"
          placeholder={"First Name"}
        />
        <Input
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <Input
          value={this.state.email}
          name="email"
          onChange={this.handleInputChange}
          type="text"
          placeholder="E-mail"
        />
        {/* <Input
          value={this.state.city}
          name="city"
          onChange={this.handleInputChange}
          type="text"
          placeholder="City"
        /> */}
        {/* <Input
          value={this.state.state}
          name="state"
          onChange={this.handleInputChange}
          type="text"
          placeholder="State"
        /> */}
        <Input
          value={this.state.postcode}
          name="postcode"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Postal Code"
        />
        {/* <Input
          value={this.state.phoneNumber}
          name="phoneNumber"
          onChange={this.handleInputChange}
          type="text"
          placeholder="Phone Number"
        /> */}
        <br/>
        <Checkbox
          type="checkbox"
          checked={this.state.hasKids}
          name="hasKids"
          onChange={this.handleCheckboxInput}
        >I have children at home.
        </Checkbox> <br/>
        <Checkbox
          type="checkbox"
          checked={this.state.hasCats}
          name="hasCats"
          onChange={this.handleCheckboxInput}
        >I have cats at home.
        </Checkbox><br/>
        <Checkbox
          type="checkbox"
          checked={this.state.hasDogs}
          name="hasDogs"
          onChange={this.handleCheckboxInput}
        >I have dogs at home.
        </Checkbox>

        <br />
        <br />
        <button onClick={this.handleFormSubmit}>Update</button>
      </form>
        )
}
}

export default UpdateForm;

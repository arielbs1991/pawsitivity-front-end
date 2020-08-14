import React, { useState } from "react";
import { Input } from 'antd'

export default function UserCardComp() {
    const [userState, setUserState] = useState({
        firstName: "",
        lastName: "",
        email:"",
        city:"",
        state:"",
        postalCode:"",
        phoneNumber:"",
        hasKids: false,
        hasCats: false,
        hasDogs: false,
        species: ""
      });

    return (
        <div className="card">
            <h1 align="center">Welcome To Pawsitivity</h1>
            <h3>Let's Learn A Little More About You</h3>
            <br></br>
            <form>
                <Input type="text" name="firstName" placeholder="First Name" />
                <Input type="text" name="lastName" placeholder="Last Name" />
                <Input type="text" name="city" placeholder="City" />
                <Input type="text" name="state" placeholder="State" />
                <Input type="text" name="phoneNum" placeholder="Phone Number" />
            </form>
            
        </div>
    )
}

// email
// city
// state
// postal code
// phone number
// has kids (boolean)
// has cats (boolean)
// has dogs (boolean)
// which species are you looking for
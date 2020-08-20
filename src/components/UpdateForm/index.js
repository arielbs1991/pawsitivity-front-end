// import React from 'react'
// import { Card } from 'antd';

// export default function UpDateForm() {
//     return (
//         <div className="userCard">
//         <Card title="Update Profile" extra={<a href="#">Edit</a>} style={{ width: 300 }}>
//             <p>First Name:</p>
//             <p>Last Name:</p>
//             <p>E-mail: </p>
//             <p>City: </p>
//             <p>State: </p>
//             <p>Postal Code: </p>
//             <p>Phone Number: </p>
//             <p>Has Kids: </p>
//             <p>Has Cats: </p>
//             <p>Has Dogs: </p>
//             <p>Preferred Species: </p>
//         </Card>
//         </div>
//     )
// }

import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import userAPI from "../../utils/userAPI"

class UpdateForm extends Component {
    state = {
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        state:"",
        postalCode:"",
        phoneNumber:"",
        hasKids:"",
        hasDogs:"",
        hasCats:""

    }
    componentDidMounta() {
        userAPI.getCurrentUserInfo().then(res => {
            console.log(res.data)
        })
    }
}

import React, { useState } from "react";
import { Input } from 'antd'
// import { Select } from 'antd';
// const { Option } = Select;
// import { Switch } from 'antd';
import { Checkbox } from 'antd';
export default function UserCardComp() {
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[email, setEmail]=useState("");
    const[city, setCity]=useState("");
    const[state, setState]=useState("");
    const[postalCode, setPostalCode]=useState("");
    const[phoneNumber, setPhoneNumber]=useState("");
    const[hasKids,setHasKids]=useState({
        hasKids:false
    });
    const[hasCats,setHasCats]=useState({
        hasCats:false
    });
    const[hasDogs,setHasDogs]=useState({
        hasDogs:false
    });
    const[species,setSpecies]=useState();
    // const [userState, setUserState] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email:"",
    //     city:"",
    //     state:"",
    //     postalCode:"",
    //     phoneNumber:"",
    //     hasKids: false,
    //     hasCats: false,
    //     hasDogs: false,
    //     species: ""
    //   });
//    onFormChange: (event) => {
//        hasKids = this.state.hasKids;
//        if(e.target.type =='checkbox') {
//            if(hasKids[e.target.name]===false) {
//                hasKids[e.target.name] = false;
//            } else if (hasKids[e.taret.name]===true) {
//                    hasKids[e.target.name] = true;
//                }
//            }
//         }
//            this.setHasKids({
//                hasKids:hasKids
//            })
    function checkValue (e) {
        if (e.target.checked===true) {
            setHasCats(true)
        } else {
            setHasCats(false)
        }
    }
    // functioncheckCheck() => {console.log("checkbox event fired")}
    const handleSubmit = e => {
        e.preventDefault();
        console.log("hello")
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(city)
        console.log(state)
        console.log(postalCode)
        console.log(phoneNumber)
        console.log(hasKids)
        console.log(hasCats)
        console.log(hasDogs)
        console.log(species)
    };
    return (
        <>
         <div className="card">
             <h1 align="center">Welcome To Pawsitivity</h1>
             <h3>Let's Learn A Little More About You</h3>
             <br></br>
             <form onSubmit={handleSubmit}>
                 <Input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={e=>setFirstName(e.target.value)} />
                 <Input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={e=>setLastName(e.target.value)} />
                 <Input type="text" name="email" placeholder="Email Address" value={email} onChange={e=>setEmail(e.target.value)} />
                 <Input type="text" name="city" placeholder="City" value={city} onChange={e=>setCity(e.target.value)} />
                 <Input type="text" name="state" placeholder="State" value={state} onChange={e=>setState(e.target.value)} />
                 <Input type="text" name="postalCode" placeholder="Postal Code" value={postalCode} onChange={e=>setPostalCode(e.target.value)} />
                 <Input type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
                 <Checkbox value={hasKids} onChange={e=>setHasKids(true)} >I have children at home.</Checkbox><br></br>
                 <Checkbox value={hasCats} onChange={e=>setHasCats(true)}>I have cats at home.</Checkbox><br></br>
                 <Checkbox value={hasDogs} onChange={e=>setHasDogs(true)}>I have dogs at home.</Checkbox><br></br> 
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
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
import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import { Button } from 'antd';
// import { CloseOutlined, CheckOutlined, InfoOutlined } from '@ant-design/icons';

export default function WelcomeCardComp() {
    return (
        
        <div className="welcomeCard">
            <h1 className="h1welcome"><strong>Welcome!</strong></h1>
            <h3>Are you looking to adopt?</h3>
            <img className="welcomeimage" src="https://www.thesprucepets.com/thmb/o2xUbDB3Ek_7NJ7-o_thPuSCumk=/1024x576/smart/filters:no_upscale()/4985392932_ca67a39f42_b-5bd3394946e0fb0058b033cc.jpg"/>
            <br/>
            <Button type="primary"><Link to="/login">User Login</Link></Button>
            <br/>
            <br/>
            <h3>Are you a shelter?</h3>
            <img className="welcomeimage" src="https://jointanimalservices.org/wp-content/uploads/2015/07/adoptapet.jpg"/>
            <br/>
            <Button type="primary"><Link to="/shelterLogin">Shelter Login</Link></Button>
        </div>
    )
}
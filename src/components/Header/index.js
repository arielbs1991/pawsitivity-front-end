import React from 'react'
import { PageHeader} from 'antd';
import { Link } from "react-router-dom"
import logo3Jpeg from '../Header/logo3.jpeg';
import LogoutComp from '../Logout'
import "./style.css";



export default function HeaderComp() {
    return (
            <PageHeader
                className="site-page-header-responsive" //flex className to try and justify center align space around in css
                title={<a href="/swipe"><img className="logo" Link="/swipe" alt="logo" src={logo3Jpeg} /></a>}
                extra={[
                    <button className="signUp3"><Link className="signUpBtn3" justify='space-around' key={1}  to="/swipe">Swipe</Link></button>,
                    <button className="signUp3"><Link className="signUpBtn3" justify='space-around' key={2}  to="/updateprofile">Profile</Link></button>,
                    <button className="signUp3"><Link className="signUpBtn3" justify='space-around' key={3}  to="/matches">Matches</Link></button>,
                    <LogoutComp/>
                ]}
            />
    )
}
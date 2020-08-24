import React from 'react'
import { PageHeader } from 'antd';
import { Link } from "react-router-dom"
import logo3Jpeg from '../Header/logo3.jpeg';
import LogoutComp from '../Logout'
import "./style.css"

export default function HeaderComp() {
    return (
            <PageHeader key={1}
                className="site-page-header-responsive" //flex className to try and justify center align space around in css
                title={<a href="/swipe"><img className="logo" Link="/swipe" alt="logo" src={logo3Jpeg} /></a>}
                extra={[
                    // <Link key={1} className="headerLink" to="/login">Login</Link>,
                    <Link justify='space-around' key={1} className="headerLink" to="/swipe">Swipe</Link>,
                    // <Link key={3} className="headerLink" to="/profile2">Profile2</Link>,
                    <Link justify='space-around' key={2} className="headerLink" to="/updateprofile">Profile</Link>,
                    <Link justify='space-around' key={3} className="headerLink" to="/matches">Matches</Link>,
                    // <Link key={6} className="headerLink" to="/petdetails">Pet Details</Link>,
                    <LogoutComp/>
                ]}
            />
    )
}
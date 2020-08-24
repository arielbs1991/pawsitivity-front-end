import React from 'react'
import { PageHeader } from 'antd';
import { Link } from "react-router-dom"
import logo3Jpeg from './logo3.jpeg';
import ShelterLogoutComp from '../ShelterLogout'
import "./style.css"

export default function ShelterHeaderComp() {
    return (
            <PageHeader
                className="site-page-header-responsive" //flex className to try and justify center align space around in css
                title={<a href="/shelteranimals"><img className="logo" Link="/shelteranimals" alt="logo" src={logo3Jpeg} /></a>}
                extra={[
                    // <Link key={1} className="headerLink" to="/login">Login</Link>,
                    <Link justify='space-around' key={2} className="headerLink" to="/shelteranimals">Animals</Link>,
                    // <Link key={3} className="headerLink" to="/profile2">Profile2</Link>,
                    <Link justify='space-around' key={4} className="headerLink" to="/shelterprofile">Profile</Link>,
                    <Link justify='space-around' key={5} className="headerLink" to="/createanimal">Add Animals</Link>,
                    // <Link key={6} className="headerLink" to="/petdetails">Pet Details</Link>,
                    <ShelterLogoutComp/>
                ]}
            />
    )
}
import React from 'react'
import { PageHeader } from 'antd';
import { Link } from "react-router-dom"
import logo3 from './logo3.jpeg';
import ShelterLogoutComp from '../ShelterLogout'
import "./style.css"

export default function ShelterHeaderComp() {
    return (
            <PageHeader
                className="site-page-header-responsive" //flex className to try and justify center align space around in css
                title={<a href="/shelteranimals"><img className="logo" Link="/shelteranimals" alt="logo" src={logo3} /></a>}
                extra={[
                    <Link justify='space-around' key={2} className="headerLink" to="/shelteranimals">Pet List</Link>,
                    <Link justify='space-around' key={4} className="headerLink" to="/shelterprofile">Profile</Link>,
                    <Link justify='space-around' key={5} className="headerLink" to="/createanimal">Add Pet</Link>,
                    <ShelterLogoutComp/>
                ]}
            />
    )
}
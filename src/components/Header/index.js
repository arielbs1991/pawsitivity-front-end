import React from 'react'
import { PageHeader, Button, Avatar } from 'antd';
import {Link} from "react-router-dom"
import { UserOutlined } from '@ant-design/icons';
import { logDOM } from '@testing-library/react';
import logo3Jpeg from '../Header/logo3.jpeg';



export default function HeaderComp() {
    return (
        <PageHeader
            className="site-page-header-responsive"
            title={<img className="logo" alt="logo" src={logo3Jpeg} />}
            
            extra={[
                <Link class="headerLink" to="/login">Login</Link>,
                <Link class="headerLink" to="/swipe">Swipe</Link>,
                <Link class="headerLink" to="/profile">Profile</Link>,
                <Link class="headerLink" to="/profile2">Profile2</Link>,
                <Link class="headerLink" to="/updateprofile">UpdateProfile</Link>,
                <Link class="headerLink" to="/matches">Matches</Link>,
                <Link class="headerLink" to="/petdetails">Pet Details</Link>
            ]}
        />

    )
}

import React from 'react'
import { PageHeader, Button } from 'antd';
import {Link} from "react-router-dom"

export default function HeaderComp() {
    return (
        <PageHeader
            className="site-page-header-responsive"

            title="Pawsitivity"
            subTitle="This is a subtitle"
            extra={[
                <Link class="headerLink" to="/login">Login</Link>,
                <Link class="headerLink" to="/swipe">Swipe</Link>,
                <Link class="headerLink" to="/profile">Profile</Link>
            ]}
        />

    )
}


// TODO:internal links are linktag from LinkTO routerDOM
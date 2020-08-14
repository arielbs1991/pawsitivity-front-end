import React from 'react'
import { PageHeader, Button } from 'antd';

export default function HeaderComp() {
    return (
        <PageHeader
            className="site-page-header-responsive"

            title="Pawsitivity"
            subTitle="This is a subtitle"
            extra={[
                <Button onClick={() => { window.location.href = "/Login" }} key="3">Login</Button>,
                <Button onClick={() => { window.location.href = "/Swipe" }} key="2">Swipe</Button>,
                <Button onClick={() => { window.location.href = "/Profile" }} key="1">Profile</Button>,
            ]}
        />

    )
}

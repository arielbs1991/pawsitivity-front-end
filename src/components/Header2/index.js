import React from 'react'
import { PageHeader } from 'antd';
import { Link } from "react-router-dom"
import logo3Jpeg from '../Header2/logo3.jpeg';
export default function HeaderComp2() {
    return (
            <PageHeader
                className="site-page-header-responsive"
                title={<a href="/welcome"><img className="logo" alt="logo" src={logo3Jpeg} /></a>}
            />
    )
}
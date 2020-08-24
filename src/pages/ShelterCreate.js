import React from "react";
import { Layout } from 'antd';
import './Swipe.css'
import ShelterInitForm from "../components/ShelterSide/ShelterInitForm";
import HeaderComp2 from "../components/Header2";

const { Content } = Layout;


export default function ShelterCreate() {
    return (
        <Layout>
            <HeaderComp2 />
            <Content>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <ShelterInitForm />
                </div>
            </Content>
        </Layout>
    )
}

import React from "react";
import { Layout } from 'antd';
import './Swipe.css'
import ShelterProfileComp from "../components/ShelterSide/ShelterProfileComp";
import ShelterHeaderComp from "../components/ShelterSide/ShelterHeader";

const { Content } = Layout;


export default function ShelterProfile() {
    return (
        <Layout>
            <ShelterHeaderComp />
            <Content>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <ShelterProfileComp />
                </div>
            </Content>
        </Layout>
    )
}

import React, { useState } from "react";
import { Layout} from 'antd';
import UserCardComp from "../components/UserCard"
import './Swipe.css'


const { Content } = Layout;


export default function Profile() {
  return (
    <Layout>
      <Content >
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <UserCardComp />
        </div>
      </Content>
  </Layout>
  )
}

import React, { useState } from "react";
import { Layout} from 'antd';
import './Swipe.css'

const { Content } = Layout;


export default function Login() {
  return (
    <Layout>
      <Content>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <h1>Hello Login Page</h1>
        </div>
      </Content>
  </Layout>
  )
}

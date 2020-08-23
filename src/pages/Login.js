import React from "react";
import { Layout } from 'antd';
import './Swipe.css'
import LogInComp from "../components/LogIn";
import HeaderComp2 from "../components/Header2";

const { Content } = Layout;


export default function Login() {
  return (
    <Layout>
      <HeaderComp2 />
      <Content>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <LogInComp />
        </div>
      </Content>
    </Layout>
  )
}

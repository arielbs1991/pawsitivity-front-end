import React from "react";
import { Layout} from 'antd';
import './Swipe.css'
import HeaderComp2 from "../components/Header2";
import WelcomeCardComp from "../components/WelcomeCard";


const { Content } = Layout;


export default function Welcome() {
  return (
    <Layout>
      <HeaderComp2/>
      <Content>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <WelcomeCardComp/>
        </div>
      </Content>
  </Layout>
  )
}

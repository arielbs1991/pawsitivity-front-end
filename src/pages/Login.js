import React from "react";
import { Layout} from 'antd';
import './Swipe.css'
import InitForm from "../components/InitForm";
import LogInComp from "../components/LogIn";

const { Content } = Layout;


export default function Login() {
  return (
    <Layout>
      <Content>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <LogInComp/>
        </div>
      </Content>
  </Layout>
  )
}

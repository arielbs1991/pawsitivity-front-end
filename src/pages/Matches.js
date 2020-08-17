import React, { useState } from "react";
import { Layout} from 'antd';
import UserCardComp from "../components/UserCard"
import './Swipe.css'
import MatchesComp from "../components/Matches";
const { Content } = Layout;
export default function Matches() {
  return (
    <Layout>
      <Content >
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <MatchesComp />
        </div>
      </Content>
  </Layout>
  )
}
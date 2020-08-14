import React from 'react'
import { Layout} from 'antd';
import UserCardComp from "../components/UserCard"
import './Swipe.css'


const { Content } = Layout;


export default function Profile() {
  return (
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <UserCardComp />
        </div>
      </Content>
  </Layout>
  )
}

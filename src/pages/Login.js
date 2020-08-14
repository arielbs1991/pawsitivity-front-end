import React from 'react'
import { Layout} from 'antd';
import './Swipe.css'

const { Content } = Layout;


export default function Login() {
  return (
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <h1>Hello Login Page</h1>
        </div>
      </Content>
  </Layout>
  )
}

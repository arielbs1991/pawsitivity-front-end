import React from "react";
import { Layout } from 'antd';
import './Swipe.css'

const { Header, Content, Footer, } = Layout;


function Swipe() {
  return (

    <Layout>
      <Layout>

        <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
          <h1 class="pawTitle">Pawsitivity</h1>
        </Header>

        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div className="animalCard">
              <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" />
              <h1 align="center">Mochi</h1>
              <div className="pupCardOptions">
                <h1>yes</h1>
                <h1>no</h1>
              </div>
              <h1 align="center">Info</h1>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Pawsitivity © 2020 Created by ATACK</Footer>
      </Layout>
    </Layout>
  );
}

export default Swipe;
import React from "react";
import { Layout} from 'antd';
import './Swipe.css'
import AnimalUpdateForm from "../components/ShelterSide/AnimalUpdateForm";
import ShelterHeaderComp from "../components/ShelterSide/ShelterHeader";

const { Content } = Layout;


export default function AnimalUpdate() {
  return (
    <Layout>
      <ShelterHeaderComp/>
      <Content>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <AnimalUpdateForm/>
        </div>
      </Content>
  </Layout>
  )
}

import React from "react";
import { Layout} from 'antd';
import './Swipe.css'
import AnimalInitForm from "../components/ShelterSide/AnimalInitForm";
import ShelterHeaderComp from "../components/ShelterSide/ShelterHeader";

const { Content } = Layout;


export default function CreateAnimal() {
  return (
    <Layout>
      <ShelterHeaderComp/>
      <Content>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <AnimalInitForm/>
        </div>
      </Content>
  </Layout>
  )
}

import React from "react";
import { Layout} from 'antd';
import './Swipe.css'
// import InitForm from "../components/InitForm";
import ShelterUpdateForm from "../components/ShelterSide/ShelterUpdateForm";
import ShelterHeaderComp from "../components/ShelterSide/ShelterHeader";

const { Content } = Layout;


export default function ShelterUpdate() {
  return (
    <Layout>
      <ShelterHeaderComp/>
      <Content>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <ShelterUpdateForm/>
        </div>
      </Content>
  </Layout>
  )
}

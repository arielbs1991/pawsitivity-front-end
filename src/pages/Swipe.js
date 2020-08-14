import React, {Component} from "react";
import { Layout} from 'antd';
import AnimalCardComp from "../components/animalCard"
import './Swipe.css'

const { Content } = Layout;


class Swipe extends Component {
state={
  dogs:[],
  cats:[]
}


render(){
  return (

    <Layout>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <AnimalCardComp  name={"Mochi"} imageSrc = {"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" }   />
          </div>
        </Content>
    </Layout>
  );}
}

export default Swipe;
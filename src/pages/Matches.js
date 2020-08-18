import React, { Component, useState } from "react";
import { Layout} from 'antd';
import UserCardComp from "../components/UserCard"
import './Swipe.css'
import MatchesComp from "../components/Matches";
import userAPI from "../utils/userAPI";
import matchAPI from "../utils/matchAPI";

const { Content } = Layout;

class Matches extends Component {

state={
  matches:[],
  userId:"",

}

componentDidMount(){
  userAPI.getCurrentUserInfo().then(res=>{
    this.setState({
      userId:res.data.userId,
      
    })
  }).then(

  matchAPI.getMatchesbyId().then(res=>{
    console.log(res.data)
    // this.setState({
    //   idArray:
    // })
  }))
}

render(){
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
}

export default Matches;
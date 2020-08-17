import React, { Component, useState } from "react";
import { Layout} from 'antd';
import './Swipe.css'
import PetDetailsComp from "../components/petDetails"
import { render } from "@testing-library/react";

const { Content } = Layout;

class petDetails extends Component{
    state={
        dogs:[],
        cats:[]
    }

render(){
    return (

        <Layout>
            <Content>
                <div className="site-layout-background">
                    <PetDetailsComp
                        name={"Mochi"}
                        imageSrc={""}
                        breed={""}
                        age={""}
                        size={""}
                        bio={""}
                        likesCats={""}
                        likesDogs={""}
                        likesKids={""}
                        shelterName={""}
                        shelterAddress={""}
                        shelterPhone={""}
                        shelterEmail={""}
                    ></PetDetailsComp>
                </div>
            </Content>
        </Layout>
    );}
}

export default petDetails;
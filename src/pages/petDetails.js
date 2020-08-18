import React, { Component, useState } from "react";
import { Layout} from 'antd';
import './Swipe.css'
import PetDetailsComp from "../components/PetDetails"
import { render } from "@testing-library/react";

const { Content } = Layout;

class PetDetails extends Component{
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
                        imageSrc={"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"}
                        breed={"Retriever"}
                        age={"2"}
                        size={"Large"}
                        bio={"A fun, playful doggo"}
                        likesCats={"Yes"}
                        likesDogs={"Yes"}
                        likesKids={"No"}
                        shelterName={"PAWS"}
                        shelterAddress={""}
                        shelterPhone={""}
                        shelterEmail={""}
                    ></PetDetailsComp>
                </div>
            </Content>
        </Layout>
    );}
}

export default PetDetails;
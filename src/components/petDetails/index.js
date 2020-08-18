import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Button } from 'antd'
import Matches from "../Matches"
import matchAPI from "../../utils/matchAPI"
import petAPI from "../../utils/petAPI"
import shelterAPI from "../../utils/shelterAPI"

// class PetDetails extends React.Component {
//     state= {
//         dog:dog,
//         isLiked=true
//     }

//     removeMatch = updateLiked=>{
//         const dogCopy = [...this.state.dog];
//         const filtered
//     }
// }






export default function PetDetailsComp(props){
    return (

        // function remove(){
        //     props.handleRemove(props.id)
        // }
        
        <div className="petDetails">
            <Row>
                <Col >
                    <img className="detailsImg" src={props.imageSrc}/> 
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <h1 align="center">{props.name}</h1>
                </Col>
            </Row>
            <div className="allPetDetails">
                <Row>
                    <Col >
                        {/* <h4 align="center"><strong>Details</strong></h4>
                        <p align="center"><strong>Breed:</strong> {this.props.dog.breed.primary} {this.props.dog.breed.secondary}</p>
                        <p align="center"><strong>Age:</strong> {this.props.dog.age}</p>
                        <p align="center"><strong>Size:</strong> {this.props.dog.size}</p>
                        <p align="center"><strong>A little bit about me:</strong> {this.props.dog.description}</p>
                        <p align="center"><strong>Am I good with cats?</strong> {this.props.dog.environment.children}</p>
                        <p align="center"><strong>Am I good with dogs?</strong> {this.props.dog.environment.dogs}</p>
                        <p align="center"><strong>Am I good with children?</strong> {this.props.dog.environment.cats}</p>
                        <h4 align="center"><strong>Get me outta here!</strong></h4>
                            <ul align="center"><strong>Location:</strong>
                                <li align="center">{this.props.dog.shelterName}</li>
                                <li align="center">{this.props.dog.shelterAddress}</li>
                                <li align="center">{this.props.dog.shelterPhone}</li>
                                <li align="center">{this.props.shelterEmail}</li>
                            </ul> */}
                            <Button type="primary">Send Contact Information to Shelter</Button>
                    </Col>
                </Row>
                <Button type="primary" block danger onClick={"remove"}>UNMATCH</Button>
            </div>
        </div>
        
    )
}
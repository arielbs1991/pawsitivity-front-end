import React, { Component } from 'react'
import { Row, Col } from 'antd';


export default function PetDetailsComp(props){
    return (
        
        <div className="petDetails">
            <Row>
                <Col span={12} offset={6}>
                    <img src={props.imageSrc}/> 
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <h1 align="center">{props.name}</h1>
                </Col>
            </Row>
            <div className="allPetDetails">
                <Row>
                    <Col span={12} offset={6}>
                        <h4 align="center"><strong>Details</strong></h4>
                        <p align="center"><strong>Breed:</strong> {props.breed}</p>
                        <p align="center"><strong>Age:</strong> {props.age}</p>
                        <p align="center"><strong>Size:</strong> {props.size}</p>
                        <p align="center"><strong>A little bit about me:</strong> {props.bio}</p>
                        <p align="center"><strong>Am I good with cats?</strong> {props.likesCats}</p>
                        <p align="center"><strong>Am I good with dogs?</strong> {props.likesDogs}</p>
                        <p align="center"><strong>Am I good with children?</strong> {props.likesKids}</p>
                        <h4 align="center"><strong>Get me outta here!</strong></h4>
                            <ul align="center"><strong>Location:</strong>
                                <li align="center">{props.shelterName}</li>
                                <li align="center">{props.shelterAddress}</li>
                                <li align="center">{props.shelterPhone}</li>
                                <li align="center">{props.shelterEmail}</li>
                            </ul>
                    </Col>
                </Row>
            </div>
        </div>
        
    )
}
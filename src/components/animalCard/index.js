import React from 'react'
import { Button} from 'antd';
import { CloseOutlined, CheckOutlined, InfoOutlined } from '@ant-design/icons';
// import petAPI from "../../utils/petAPI"
import matchAPI from "../../utils/matchAPI";
import ModalComp from "../Modal"

export default function AnimalCardComp(props) {
    return (
        
        <div className="animalCard">
            <img src={props.imageSrc}/>
            <h1 align="center">{props.dog.name}</h1>
            <div className="pupCardOptions">
            <Button onClick={props.dislike} type="primary" danger shape="circle" icon={<CloseOutlined />}></Button>
            <Button onClick={props.like} type="primary" shape="circle" icon={<CheckOutlined />}></Button>
            </div>
            <ModalComp dog={props.dog}></ModalComp>
        </div>
    )
}
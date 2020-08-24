import React from 'react'
import { Button} from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import ModalComp from "../Modal"
import "./style.css"

export default function AnimalCardComp(props) {
    return (
        
        <div className="animalCard">
            <img className="image" src={props.imageSrc} alt={props.name}/>
            <h1 className="h1AC" align="center">{props.pet.name}</h1>
            <div className="pupCardOptions">
            <Button onClick={props.dislike} type="primary" danger shape="circle" icon={<CloseOutlined />}></Button>
            <Button onClick={props.like} type="primary" shape="circle" icon={<CheckOutlined />}></Button>
            </div>
            <ModalComp pet={props.pet}></ModalComp>
        </div>
    )
}
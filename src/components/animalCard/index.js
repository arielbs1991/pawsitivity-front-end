import React from 'react'
import { Button} from 'antd';
import { CloseOutlined, CheckOutlined, InfoOutlined } from '@ant-design/icons';
// import petAPI from "../../utils/petAPI"
import matchAPI from "../../utils/matchAPI";
import ModalComp from "../Modal"
import style from "./style.css"

export default function AnimalCardComp(props) {
    return (
        
        <div className="animalCard">
            <img className="image" src={props.imageSrc}/>
            <h1 className="h1AC" align="center">{props.pet.name}</h1>
            <div className="pupCardOptions">
            <Button onClick={props.dislike} type="primary" danger shape="circle" icon={<CloseOutlined />}></Button>
            <Button onClick={props.like} type="primary" shape="circle" icon={<CheckOutlined />}></Button>
            </div>
            <ModalComp pet={props.pet}></ModalComp>
        </div>
    )
}
import React from 'react'
import { Button} from 'antd';
import { CloseOutlined, CheckOutlined, InfoOutlined } from '@ant-design/icons';


export default function AnimalCardComp(props) {
    return (

        <div className="animalCard">
            <img src={props.imageSrc}/>
            <h1 align="center">{props.name}</h1>
            <div className="pupCardOptions">
            <Button type="primary" shape="circle" icon={<CloseOutlined />}></Button>
            <Button type="primary" danger shape="circle" icon={<CheckOutlined />}></Button>
            </div>
            <Button align="center" shape="circle" icon={<InfoOutlined />}></Button>
        </div>
    )
}
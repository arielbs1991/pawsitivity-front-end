import React from 'react'
import { Button } from 'antd';
import { CloseOutlined, CheckOutlined, InfoOutlined } from '@ant-design/icons';
// import petAPI from "../../utils/petAPI"
import animalAPI from "../../utils/animalAPI";
import AnimalUpdateModal from "../AnimalUpdateModal"

// handleButtonClick = e => {
//     e.preventDefault();
//     // this.setState({ redirect: '/shelterAnimals' })
//     this.setState({
//         state: < />})
//     }

handleUpdateButtonClick = e => {
            e.preventDefault();
            this.setState({ state: <AnimalUpdateModal animal={props.animal} /> })
        }

export default function ShelterAnimalCard(props) {
        return (

            <div className="shelterAnimalCard">
                <img src={props.animal.imageSrc} />
                <h1 align="center">{props.animal.name}</h1>
                <h1 align="center">ID: {props.animal.id}</h1>
                <div className="pupCardOptions">

                    {/* <Button onClick={this.handleButtonClick} type="primary">View Matches</Button> */}
                </div>
                {/* <AnimalUpdateModal animal={props.animal}></AnimalUpdateModal> */}
                <Button onClick={this.handleUpdateButtonClick} type="primary">Update Animal</Button>
            </div>
        )
    }
import React from 'react'
import { Button } from 'antd';
import AnimalUpdateModal from "../AnimalUpdateModal"

// handleButtonClick = e => {
//     e.preventDefault();
//     // this.setState({ redirect: '/shelterAnimals' })
//     this.setState({
//         state: < />})
//     }

// handleUpdateButtonClick = e => {
//             e.preventDefault();
//             this.setState({ state: <AnimalUpdateModal animal={props.animal} /> })
//         }

export default function ShelterAnimalCard(id, type, imageSrc, name, breed, secondaryBreed, age, sex, size, bio, likesCats, LikesDogs, likesKids) {
        return (

            <div className="animalCard">
                <img src={imageSrc} />
                <h1 align="center">{name}</h1>
                <h1 align="center">ID: {id}</h1>
                <div className="pupCardOptions">

                    {/* <Button onClick={this.handleButtonClick} type="primary">View Matches</Button> */}
                </div>
                {/* <AnimalUpdateModal animal={props.animal}></AnimalUpdateModal> */}
                <Button onClick={this.handleUpdateButtonClick} id={id} type="primary">Update Animal</Button>
            </div>
        )
    }
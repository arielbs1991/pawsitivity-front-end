import React from 'react'
import { Button } from 'antd';
import AnimalUpdateModal from "../AnimalUpdateModal"
import { Link } from 'react-router-dom';

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

export default function ShelterAnimalCard({ id, type, imageSrc, location, name, breed, secondaryBreed, age, sex, size, bio, likesCats, LikesDogs, likesKids }) {
    return (

        <div className="animalCard">
            <img src={imageSrc} />
            <h1 align="center">{name}</h1>
            <h5 align="center">ID: {id}</h5>
            <h5 align="center">Breeds: {breed}, {secondaryBreed}</h5>
            <h5 align="center">Age: {age}</h5>
            <h5 align="center">Gender: {sex}</h5>
            <h5 align="center">Size: {size}</h5>
            <h5 align="center">Bio: {bio}</h5>
            <div className="pupCardOptions">

                {/* <Button onClick={this.handleButtonClick} type="primary">View Matches</Button> */}
            </div>
            {/* <AnimalUpdateModal animal={props.animal}></AnimalUpdateModal> */}
            <Button id={id} type="primary"><Link to='/updateanimal'>
                Update Animal
            </Link>
            </Button>
        </div>
    )
}
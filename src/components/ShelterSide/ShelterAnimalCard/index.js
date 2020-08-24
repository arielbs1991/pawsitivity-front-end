import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"


export default function ShelterAnimalCard({ id, type, imageSrc, location, name, breed, secondaryBreed, age, sex, size, bio, likesCats, LikesDogs, likesKids }) {
    return (

        <div className="animalCard">
            <img src={imageSrc} />
            <h1 align="center">{name}</h1>
            <p align="center"><strong>ID:</strong> {id}</p>
            <p align="center"><strong>Breed(s):</strong> {breed}, {secondaryBreed}</p>
            <p align="center"><strong>Age:</strong> {age}</p>
            <p align="center"><strong>Gender:</strong> {sex}</p>
            <p align="center"><strong>Size:</strong> {size}</p>
            <p align="center"><strong>Bio:</strong> {bio}</p>
            <div className="pupCardOptions">

            </div>
            <button className="update" id={id}><Link className="btn3" to='/updateanimal'>
                <strong>Update Animal</strong>
            </Link>
            </button>
        </div>
    )
}
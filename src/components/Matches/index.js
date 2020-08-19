import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd'
// import matchAPI from '../../utils/matchAPI'

export default function MatchesComp({imgSrc, name, breed, breedTwo, age, gender, size}) {
  return(

    <div className="animalCard">
      <img src={imgSrc}/>
      <h1 align="center">{name}</h1>
      <p>Breed: {breed} {breedTwo}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Size: {size}</p>
      <Button>Contact Shelter</Button>
    </div>
  )
}
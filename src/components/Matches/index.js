import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd'
// import matchAPI from '../../utils/matchAPI'
import UnmatchComp from "../Unmatch"

export default function MatchesComp({ imgSrc, name, breed, breedTwo, age, gender, size, handleClick, id, unmatch }) {
  return (

    <div className="animalCard">
      <img src={imgSrc} />
      <h1 align="center">{name}</h1>
      <p>Breed: {breed} {breedTwo}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Size: {size}</p>


      {/* FOR SOME REASON I CAN'T USE THE ANT BUTTON OR ELSE IT WON'T WORK AS INTENDED, LOL */}
      <button id={id} onClick={handleClick}>Contact Shelter</button>
      <div>
        <Button onClick={unmatch}>Unmatch</Button>
      </div>
    </div>
  )
}
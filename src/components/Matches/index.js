import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd'
// import matchAPI from '../../utils/matchAPI'
import UnmatchComp from "../Unmatch"
import ShelterModal from "../ShelterModal"

export default function MatchesComp({ imgSrc, name, breed, breedTwo, age, gender, size, handleContactClick, id, handleDislikeClick, matchId, address }) {
  return (

    <div className="animalCard">
      <img src={imgSrc} />
      <h1 align="center">{name}</h1>
      <p><strong>Breed: </strong>{breed} {breedTwo}</p>
      <p><strong>Age: </strong>{age}</p>
      <p><strong>Gender: </strong>{gender}</p>
      <p><strong>Size: </strong>{size}</p>


      {/* FOR SOME REASON I CAN'T USE THE ANT BUTTON OR ELSE IT WON'T WORK AS INTENDED, LOL */}
      <button id={id} onClick={handleContactClick}>Contact Shelter</button>
      <ShelterModal><p></p></ShelterModal>
      <div>
        <br></br>
        <button  id={matchId} onClick={e=>handleDislikeClick(e)}>Unmatch</button>
      </div>
    </div>
  )
}
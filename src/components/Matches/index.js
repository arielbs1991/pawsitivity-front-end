import React from 'react'
import ShelterModal from "../ShelterModal"
import "./style.css"
import { message } from 'antd';

const success = () => {
  message.success({
    content: 'We have notified the shelter of your interest!',
    className: 'custom-class',
    style: {
      marginTop: '50vh'
    },
  });
};

export default function MatchesComp({ imgSrc, name, breed, breedTwo, age, gender, size, handleContactClick, id, handleDislikeClick, matchId, address1, address2, city, state, postcode }) {
  return (
    <div className="animalCard">
      <img src={imgSrc} className="rounded" alt={name}/>
      <h1 className="h1" align="center">{name}</h1>
      <p><strong>Breed: </strong>{breed} {breedTwo}</p>
      <p><strong>Age: </strong>{age}</p>
      <p><strong>Gender: </strong>{gender}</p>
      <p><strong>Size: </strong>{size}</p>

      <button className="contact update" id={id} onClick={handleContactClick, success}>Contact Shelter</button>
      <br></br>
      <div>
      <ShelterModal address1={address1} address2={address2} city={city} state={state} postcode={postcode}/>
      </div>
      <div>
        <br></br>
        <button className="unmatch remove" id={matchId} onClick={e=>handleDislikeClick(e)}>Unmatch</button>
      </div>
    </div>
  )
}
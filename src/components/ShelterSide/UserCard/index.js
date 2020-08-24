import React from 'react'
import "./style.css"
import { message } from 'antd';

const success = () => {
  message.success({
    content: 'We have notified the User of your interest!',
    className: 'custom-class',
    style: {
      marginTop: '50vh',
    },
  });
};

export default function UserCardComp({ firstName, lastName, email, phoneNumber, city, state, handleContactClick, id, handleDislikeClick, matchId}) {
  return (
    <div className="animalCard">
      <h1 className="h1" align="center">{firstName}{lastName}</h1>
      <p><strong>E-mail: </strong>{email}</p>
      <p><strong>Phone Number: </strong>{phoneNumber}</p>
      <p><strong>City: </strong>{city}</p>
      <p><strong>State: </strong>{state}</p>
      <button className="contact" id={id} onClick={handleContactClick, success}>Contact User</button>
      <br></br>
      <div>
        <br></br>
        <button className="unmatch" id={matchId} onClick={e=>handleDislikeClick(e)}>Unmatch</button>
      </div>
    </div>
  )
}
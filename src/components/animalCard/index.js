import React from 'react'


export default function AnimalCardComp(props) {
    return (

        <div className="animalCard">
            <img src={props.imageSrc}/>
            <h1 align="center">{props.name}</h1>
            <div className="pupCardOptions">
                <h1>yes</h1>
                <h1>no</h1>
            </div>
            <h1 align="center">Info</h1>
        </div>
    )
}

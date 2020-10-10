import React from 'react';
import './Card.css';

const Card = ({id, name, status, species, gender, origin, location}) => {
    return (
        <div className='Card dib grow br3 pa3 ma2 bw2 shadow-5' >
            <img alt='Character' src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} width='100px'/>
            <div>
                <h2>{name}</h2> 
                <p>{status}</p>
                {/* <p>{id}</p> */}
                <p>{gender}</p>
                <p>{species}</p>
                <p>Origin: {origin.name}</p>
                <p>Location: {location.name}</p>
            </div>
        </div>
    );
}

export default Card;
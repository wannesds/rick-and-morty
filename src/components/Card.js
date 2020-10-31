import React from 'react';

const Card = ({id, name, status, species, gender, origin, location, episode}) => {
    return (
        <div className='Card'>
            
            <img alt='Character' src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}/>
            
            <div className='CardInfo'>
                <h3>{name} <h4>- {gender}</h4></h3>
                <h5 className='Species'>{species}</h5>
                <p>Last location:<br></br> <h5>{location.name}</h5></p>
                <p>Origin:<br></br> <h5>{origin.name}</h5></p>  
                {status === 'Alive' ? null : <div className='DeadSign'></div>}
            </div>
                      
        </div>
    );
}

export default Card;
import React from 'react';

const Card = ({id, name, status, species, type, gender, origin, location}) => {
 
    return (
        <div className='Card'>
         
            <img alt='Character' src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}/>
            
            <div className='CardInfo'>
                <h3>
                    {name} <span>- {gender}</span>
                </h3>

                <h4>
                    {species} {type?<span> - {type}</span>:""}
                </h4>

                <p>
                    Last seen:<br></br>
                    <span>{location.name}</span>
                </p>

                {/* <p>Origin:<br></br> <h5>{origin.name}</h5></p>   */}
                {status === 'Alive' ? null : <div className='DeadSign'></div>}
            </div>
                      
        </div>
    );
}

export default Card;
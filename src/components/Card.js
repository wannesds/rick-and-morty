import React from 'react';

const Card = ({id, name, status, species, gender, origin, location}) => {
    return (
        <div className='Card grow'>
            <img alt='Character' src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} width='100px'/>
            <h3>{name}</h3>

            <div className="MoreInfo" hidden={true}>
                <h4>Location: {location.name}</h4>
                <h4>Origin: {origin.name}</h4>
            </div>
                
            <div>
                <p className='Gender'>{gender}</p>
                 {status === 'Alive' ? null : <div className='DeadSign'></div>}
            </div>
        </div>
    );
}

export default Card;
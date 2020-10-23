import React from 'react';

const Card = ({id, name, status, species, gender, origin, location}) => {
    return (
        <div className='Card grow-large' >
            <img alt='Character' src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} width='100px'/>
            <h3>{name}</h3> 
            <div>
                <p className='Gender'>{gender}</p>
                 {status === 'Alive' ? null : <div className='DeadSign'></div>}
            </div>
        </div>
    );
}

export default Card;
import React from 'react';

const Card = ({id, name, status}) => {
    return (
        <div className='bg-dark-green dib grow br3 pa3 ma2 bw2 shadow-5'>
            <img alt='Character' src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`} width='100px'/>
            <div>
                <h2>{name}</h2>
                <p>{status}</p>
                <p>{id}</p>
            </div>
        </div>
    );
}

export default Card;
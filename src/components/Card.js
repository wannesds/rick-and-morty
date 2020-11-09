import React from 'react';

const Card = ({id, name, status, species, type, gender, origin, location}) => {
 
    return (
        <div className='Card'>
         
            <img alt='Character' src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}/>
            
            <div>
                <h3>
                    {name} <i>({gender})</i>
                </h3>

                <br/>

                <h4>
                    {species}
                    <br/>
                    {type && <i>*{type}*</i>}
                </h4>
                
                <p>
                    Last seen:<br/>
                    <i>{location.name}</i>
                </p>

                {/* <p>Origin:<br></br> <h5>{origin.name}</h5></p>   */}
                {status === 'Alive' ? null : <div className='DeadSign'/>}
            </div>
                      
        </div>
    );
}

export default Card;
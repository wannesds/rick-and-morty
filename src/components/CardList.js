import React from 'react';
import Card from './Card';

function CardList({ chars }) {
    return(
        <div className="CardList">
           { 
                chars.map((char, i) => {
                    return(
                        <Card
                        key={i} 
                        id={chars[i].id} 
                        name={chars[i].name} 
                        status={chars[i].status}
                        species={chars[i].species}
                        gender={chars[i].gender}
                        origin={chars[i].origin}
                        location={chars[i].location}
                        episode={chars[i].episode}
                        />
                    );
                })   
            
            
            }
        </div>
    );
}

export default CardList;

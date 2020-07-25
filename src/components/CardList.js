import React from 'react';
import Card from './Card';

const CardList = ({ chars }) => {
    return(
        <div>
           { 
                chars.map((char, i) => {
                    return(
                        <Card
                        key={i} 
                        id={chars[i].id} 
                        name={chars[i].name} 
                        status={chars[i].status}
                        />
                    );
                })   
            
            
            }
        </div>
    );
}

export default CardList;

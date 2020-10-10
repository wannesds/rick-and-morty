import React from 'react';
import  {quotes} from '../quotes.js';


const Header = () => {

    const id = Math.trunc(Math.random() * quotes.length);

    return (
        <div className="QuoteBox">
            <p className="f3 i">{quotes[id].quote}</p>
            {/* <img className="" alt='Character' src={quotes[id].picture} width='50px'/> */}
            <p className="f5 pa1">- {quotes[id].name}</p>
        </div>  
    )
}

export default Header;
import React from 'react';
import  {quotes} from '../quotes.js';
import './Header.css';

const Header = () => {
    let id = Math.trunc(Math.random() * quotes.length);

    return (
        <div className="quoteBox pa2">
            <p className="f3 i">{quotes[id].quote}</p>
            {/* <img className="" alt='Character' src={quotes[id].picture} width='50px'/> */}
            <p className="f5 pl2 mb2 dib">- {quotes[id].name}</p>
        </div>  
    )
}

export default Header;
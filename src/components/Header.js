import React, {Fragment} from 'react';
import  {quotes} from '../quotes.js';
import './Header.css';

const Header = () => {
    let m = Math.trunc(Math.random() * quotes.length);
    const quote = quotes[1].name

    return (
        <Fragment>
            <h1>{quote}</h1>
            <p>{m}</p> 
        </Fragment>  
    )
}

export default Header;
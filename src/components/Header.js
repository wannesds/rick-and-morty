import React, {useEffect, useState} from 'react';
import  {quotes} from '../quotes.js';


function Header({url}) {
    const [id, setId] = useState(1);

    useEffect(() => {
        setId(Math.trunc(Math.random() * quotes.length))
    }, [url]);

    return (
        <div className="QuoteBox">
            <p className="f3 i">{quotes[id].quote}</p>
            {/* <img className="" alt='Character' src={quotes[id].picture} width='50px'/> */}
            <p className="f5 pa1">- {quotes[id].name}</p>
        </div>  
    )
}

export default Header;
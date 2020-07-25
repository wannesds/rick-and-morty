import React from 'react';

const ChangePage = ({prevPage, nextPage, info}) => {    

    console.log(info.prev);
    return (
        <div>
            <button 
            onClick={prevPage} 
            hidden={!info.prev? true:false}
            >Prev</button>

            <button 
            onClick={nextPage}  
            hidden={!info.next? true:false}
            >Next</button>
        </div>     
    );

}

export default ChangePage;
import React from 'react';

const ChangePage = ({prevPage, nextPage, info}) => {    
    return (
        <div> 
        {/* this can be written shorter */}
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
import React from 'react';

const ChangePage = ({prevPage, nextPage, info, url}) => { 
    let pArr = url.split("=",2);   //extracts page number
    return (
        <div className="ChangePageBox">
            <button 
            onClick={prevPage} 
            hidden={!info.prev? true:false}>
            Prev
            </button>

            <p>
            {info.prev ? pArr[1].substring(0,1) : '1'}
                / 
            {info.pages}
            </p>

            <button 
            onClick={nextPage}  
            hidden={!info.next? true:false}>
            Next
            </button>
        </div>     
    );
}

export default ChangePage;
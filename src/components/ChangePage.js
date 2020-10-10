import React from 'react';

const ChangePage = ({prevPage, nextPage, info, url}) => { 
    const r = url.split("=",2);   //extracts page number

    console.log(r)
    return (
        <div className="ChangePageBox">
            <button 
            onClick={prevPage} 
            hidden={!info.prev? true:false}>
            Prev
            </button>

            <p>
            {info.prev ? r[1] : '1'}
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
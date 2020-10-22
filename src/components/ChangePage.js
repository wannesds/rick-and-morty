import React from 'react';

const ChangePage = ({prevPage, nextPage, info, url}) => {
   const r = url.match(/(\d+)/);  //extracts page number

    console.log(r)
    return (
        <div className="ChangePageBox">
            <button 
            onClick={prevPage} 
            hidden={!info.prev? true:false}>
            Prev
            </button>

            <p>
            {r == null ? '1' : r[0]} / {info.pages}
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
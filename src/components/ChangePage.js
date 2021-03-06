import React from 'react';

const ChangePage = ({prevPage, nextPage, info, url}) => {
    const pNum = url.match(/(\d+)/);
    return (
        <div className="ChangePageBox">
            <button onClick={prevPage} disabled={!info.prev ? true : false}>
            Prev
            </button>

            <p>
            {pNum === null ? '1' : pNum[0]} / {info.pages}
            </p>

            <button onClick={nextPage}  disabled={!info.next ? true : false}>
            Next
            </button>
        </div>     
    );
}

export default ChangePage;
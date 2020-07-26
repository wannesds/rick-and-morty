import React from 'react';

const Filter = ({handleSubmit}) => {

    return (
            
        <form onSubmit={handleSubmit}>
            <input name="name" type='text' placeholder='search by name'/>
            <button>Wubba Lubba Dub Dub</button>
        </form>
    );
}

export default Filter;
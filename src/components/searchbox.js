import React from 'react';

//to conduct a search of the robots
const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange={searchChange}
            />
        </div>
    );
}

//export
export default SearchBox;
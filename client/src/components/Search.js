import React, {useRef} from 'react';
import './Search.css';

function Search({currentSearch, onSearch}) {
  const searchElement = useRef(null);

  return (
    <input 
      ref={searchElement}
      className={`search ${currentSearch !== '' ? 'dirty' : ''}`}
      type="text" 
      placeholder='Search Products...' 
      onChange={() => onSearch(searchElement.current.value)}></input>
  )
}

export default Search
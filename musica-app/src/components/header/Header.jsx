import { debounce } from 'lodash';
import React from 'react'
import { CiSearch } from "react-icons/ci";

const Header = ({ getSearch }) => {

  const handleInputChange = debounce((event) => {
    getSearch(event.target.value);
  }, 600);

  return (
    <div className='header'>
      <div className="search">
      <div className="animate"><CiSearch /></div><input onChange={handleInputChange} placeholder='Search'/>
      </div>
    </div>
  )
}

export default Header
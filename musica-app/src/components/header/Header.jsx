import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Input } from '../ui/input';

const Header = () => {
  return (
    <div className='header'>
      <div className="search">
      <CiSearch /><Input placeholder='Search'/>
      </div>
    </div>
  )
}

export default Header
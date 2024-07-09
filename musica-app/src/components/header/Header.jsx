import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Input } from '../ui/input';

const Header = ({ getSearch }) => {

  return (
    <div className='header'>
      <div className="search">
      <div className="animate"><CiSearch /></div><input onChange={(e) => {getSearch(e.target.value)}} placeholder='Search'/>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div className="search">
        <CiSearch />
        Search
      </div>
    </div>
  )
}

export default Header
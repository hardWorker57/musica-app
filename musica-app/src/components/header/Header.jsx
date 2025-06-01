import { debounce } from "lodash";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiGuitarBassHead } from "react-icons/gi";

const Header = ({ getSearch, setMobile, mobile }) => {
  const handleInputChange = debounce((event) => {
    getSearch(event.target.value);
  }, 700);

  return (
    <div className="header">
      <div className='logo' onClick={() => setMobile(!mobile)}>
        <GiGuitarBassHead />
      </div>
      <div className="search">
        <div className="animate">
          <CiSearch />
        </div>
        <input type="search" onChange={handleInputChange} placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;

import React from 'react'
import s from "./Sidebar.module.scss"
import { MdHomeFilled } from "react-icons/md";
import { PiPlaylistFill } from "react-icons/pi";
import { IoIosRadio } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { GiGuitarBassHead } from "react-icons/gi";
import FadeDown from '../ui/animations/FadeDown';

const Sidebar = ({mobile}) => {
  return (
    <div className={`${s.fixed} ${mobile ? "s.fixed_active" : ""}`}>
      {/* <FadeDown delay={.4}> */}
        <div className={s.Sidebar}>
          <ul className={s.menu}>
            <li><NavLink to="/" className={s.menu_list}><MdHomeFilled /></NavLink></li>
            <li><NavLink to="/playlist" className={s.menu_list}><PiPlaylistFill /></NavLink></li>
            <li><NavLink to="/rooms" className={s.menu_list}><IoIosRadio /></NavLink></li>
            <li><NavLink to="/liked" className={s.menu_list}><FaHeart /></NavLink></li>
            <li><NavLink to="/friends" className={s.menu_list}><FaUserFriends /></NavLink></li>
          </ul>
          <ul className={s.menu}>
            <li><NavLink to="/profile" className={s.menu_list}><CgProfile /></NavLink></li>
            <li><NavLink to="/logout" className={s.menu_list}><MdOutlineLogout /></NavLink></li>
          </ul>
        </div>
      {/* </FadeDown> */}
    </div>
  )
}

export default Sidebar
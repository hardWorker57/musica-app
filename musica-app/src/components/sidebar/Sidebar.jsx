import React from 'react'
import s from "./Sidebar.module.scss"
import { MdHomeFilled } from "react-icons/md";
import { PiPlaylistFill } from "react-icons/pi";
import { IoIosRadio } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiGuitarBassHead } from "react-icons/gi";
import FadeDown from '../ui/animations/FadeDown';

const Sidebar = ({mobile}) => {
  return (
    <div className={`${s.fixed} ${mobile ? "s.fixed_active" : ""}`}>
      {/* <FadeDown delay={.4}> */}
        <div className={s.Sidebar}>
          <ul className={s.menu}>
            <li><Link to="/" className={s.menu_list}><MdHomeFilled /></Link></li>
            <li><Link to="/playlist" className={s.menu_list}><PiPlaylistFill /></Link></li>
            <li><Link to="/rooms" className={s.menu_list}><IoIosRadio /></Link></li>
            <li><Link to="/liked" className={s.menu_list}><FaHeart /></Link></li>
            <li><Link to="/friends" className={s.menu_list}><FaUserFriends /></Link></li>
          </ul>
          <ul className={s.menu}>
            <li><Link to="/profile" className={s.menu_list}><CgProfile /></Link></li>
            <li><Link to="/logout" className={s.menu_list}><MdOutlineLogout /></Link></li>
          </ul>
        </div>
      {/* </FadeDown> */}
    </div>
  )
}

export default Sidebar
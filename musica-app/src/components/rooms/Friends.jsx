import React from "react";
import s from "./Friends.module.scss";
import Header from "../header/Header";

const Friends = () => {
  return (
    <div className={s.Friends}>
      <Header />
      <div className="container">
        <br />
        <div className="block_title">Friends</div>
      </div>
    </div>
  );
};

export default Friends;

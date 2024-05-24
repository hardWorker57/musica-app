import React, { useEffect, useState } from "react";
import s from "./Song.module.scss";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { FaHeart } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { RiPlayListAddFill } from "react-icons/ri";

const Song = () => {
  const { id } = useParams();
  const [currentMusic, setCurrentMusic] = useState([]);

  const song_url = `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6be32b6585msh739088a21dcd723p1cf50cjsn8c4f40ca3427",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  useEffect(() => {
    getThisMusic();
    window.scrollTo(0, 0);
  }, []);
  const getThisMusic = () => {
    fetch(song_url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCurrentMusic(data);
          console.log(data)
        }
      });
  };

    return (
    <div className={s.Song}>
      <div className="overlay_image"><img src={currentMusic.album ? currentMusic.album.cover_xl : ''} alt="" /></div>
      <Header/>
      <div className="container">
        <div className={s.song_wrapper}>
            <div className={s.image}>
                <img src={currentMusic.album ? currentMusic.album.cover_medium : ""}alt=""/>
            </div>
            <div className={s.content}>
                <div className={s.title}>{currentMusic ? currentMusic.title : ""}</div>
                <div className={s.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quas?</div>
                <div className={s.songs_num}>64</div>
                <div className={s.btns}>
                    <div className={s.custom_btn}><FaPlayCircle />Play all</div>
                    <div className={s.custom_btn}><RiPlayListAddFill />Add to collection</div>
                    <div className={s.custom_btn}><FaHeart color="#E5524A"/></div>
                    <div className="audio"><audio src={currentMusic ? currentMusic.preview : '21'}>12</audio></div>
                </div>
            </div>
        </div>
        <audio src={currentMusic ? currentMusic.preview : '21'}>12</audio>
      </div>
    </div>
  );
};

export default Song;

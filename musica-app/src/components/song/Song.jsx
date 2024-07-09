import React, { useEffect, useRef, useState } from "react";
import s from "./Song.module.scss";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { RiPlayListAddFill } from "react-icons/ri";

const Song = () => {
  const [flag, setFlag] = useState(false)
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.error("Audio playback failed:", error));
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

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
          console.log(currentMusic.preview)
        }
      });
  };

    return (
    <div className={s.Song}>
      <div className="overlay_image"><img src={currentMusic.album ? currentMusic.album.cover_xl : ''} alt="" /></div>
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
                    <div className="audio">
                      <div>
                        <audio ref={audioRef} src={currentMusic.preview} preload='metadata'>
                          Your browser does not support the audio element.
                        </audio>
                        <button onClick={playAudio}>Play</button>
                        <button onClick={pauseAudio}>Pause</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Song;

import React, { useContext, useEffect, useRef, useState } from "react";
import s from "./Song.module.scss";
import { useParams } from "react-router-dom";
import { FaHeart, FaPlayCircle } from "react-icons/fa";
import { RiPlayListAddFill } from "react-icons/ri";
import TrackContext from "../store/TrackContext";
import FadeUp from "../ui/animations/FadeUp";
import FadeDown from "../ui/animations/FadeDown";
import FadeLeft from "../ui/animations/FadeLeft";

const Song = () => {
  const audioRef = useRef(null);
  const { likedList, updateData, updateLikedList } = useContext(TrackContext);

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
    // getFirstMusic();
    window.scrollTo(0, 0);
  }, []);
  
  const getThisMusic = () => {
    fetch(song_url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setCurrentMusic(data);
          updateData(data);
        }
      });
  };
  const addToLikedList = () => {
    likedList.includes(currentMusic) ? console.log("Already Liked") : updateLikedList(currentMusic);
  };

  return (
    <div className={s.Song}>
      <div className="overlay_image">
        <FadeUp delay={0.5}>
          <img
            src={currentMusic.album ? currentMusic.album.cover_xl : ""}
            alt=""
          />
        </FadeUp>
      </div>
      <div className="container">
        <div className={s.song_wrapper}>
          <div className={s.image}>
            <FadeLeft delay={.7}>
              <img
                src={currentMusic.album ? currentMusic.album.cover_medium : ""}
                alt=""
              />
            </FadeLeft>
          </div>
          <FadeDown delay={.9}>
            <div className={s.content}>
              <div className={s.title}>
                {currentMusic ? currentMusic.title : ""}
              </div>
              <div className={s.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
                quas?
              </div>
              <div className={s.songs_num}>64</div>
              <div className={s.btns}>
                <div className={s.custom_btn}>
                  <FaPlayCircle />
                  Play all
                </div>
                <div className={s.custom_btn}>
                  <RiPlayListAddFill />
                  Add to collection
                </div>
                <div className={s.custom_btn} onClick={addToLikedList}>
                  <FaHeart color="#E5524A" />
                </div>
                <div className="audio">
                  <div>
                    <audio
                      ref={audioRef}
                      src={currentMusic.preview}
                      preload="metadata"
                    >
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          </FadeDown>
        </div>
      </div>
    </div>
  );
};

export default Song;

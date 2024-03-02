import React, { useEffect, useState } from "react";
import s from "./Song.module.scss";
import { useParams } from "react-router-dom";

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
        }
      });
  };

  return (
    <div className={s.Song}>
      <div className="container">
        <div className="title">{currentMusic ? currentMusic.title : ''}</div>
        <div className="image"><img src={currentMusic.album ? currentMusic.album.cover : ''} alt="" /></div>
      </div>
    </div>
  );
};

export default Song;

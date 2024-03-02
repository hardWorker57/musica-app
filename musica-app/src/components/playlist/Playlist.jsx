import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import s from "./Playlist.module.scss";
import { Link } from "react-router-dom";

const Playlist = () => {

  const [music, setMusic] = useState([]);

  const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=pushbaby";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6be32b6585msh739088a21dcd723p1cf50cjsn8c4f40ca3427",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const getMusic = () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMusic(data.data);
        }
      });
  };
  useEffect(() => {
    getMusic();
  }, []);

  return (
    <div className={s.Playlist}>
      <div className="container">
        <div className={s.btns}>
          <Button>My collection</Button>
          <Button>Likes</Button>
        </div> <br />
        <div className="song_cards">
          {music.length > 0 && music.slice(0, 4).map((album, index) => (
            <Link to={`/album/${album ? album.id : ''}`} key={index}>
              <div className="song_card">
                <img src={album.album ? album.album.cover_big : ''} alt="no image" />
                <div className="cover_overlay">
                  <div className="card_title">{album ? album.title : ''}</div>
                  <div className="card_author">{album.artist ? album.artist.name : ''}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;

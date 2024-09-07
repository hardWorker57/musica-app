import React, { useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Playlist from "./components/playlist/Playlist";
import Song from "./components/song/Song";
import Rooms from "./components/rooms/Rooms";
import Player from "./components/player/Player";
import Liked_list from "./components/rooms/likedList/LikedList";
import Friends from "./components/rooms/Friends";
import Header from "./components/header/Header";
import TrackProvider from "./components/store/provider/TrackProvider";

const App = () => {

  const [searchType, setSearch] = useState('');
  const [music, setMusic] = useState([]);
  const [mobile, setMobile] = useState(false);

  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchType ? searchType : 'alan walker'}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6be32b6585msh739088a21dcd723p1cf50cjsn8c4f40ca3427',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };

  const getMusic = () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMusic(data.data)
        }
      });
  }
  useEffect(() => {
    getMusic()
  }, [searchType])

  const getSearch = (search) => {
    setSearch(search)
  }

  return (
    <div className="App">
      <TrackProvider>
        <Sidebar mobile={mobile} />
        <Header getSearch={getSearch} mobile={mobile} setMobile={setMobile} />
        <Routes>
          <Route path="/" element={<Main musicData={music} />}></Route>
          <Route path="playlist" element={<Playlist />}></Route>
          <Route path="song/:id" element={<Song/>}></Route>
          <Route path="album/:id" element={<Song />}></Route>
          <Route path="rooms" element={<Rooms/>}></Route>
          <Route path="liked" element={<Liked_list/>}></Route>
          <Route path="friends" element={<Friends/>}></Route>
        </Routes>
        <Player/>
      </TrackProvider>
    </div>
  );
};

export default App;

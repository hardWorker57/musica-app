import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Playlist from "./components/playlist/Playlist";
// import Header from "./components/header/Header";
import Song from "./components/song/Song";
import Rooms from "./components/rooms/Rooms";
import Player from "./components/player/Player";
import Liked_list from "./components/rooms/Liked_list";
import Friends from "./components/rooms/Friends";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="playlist" element={<Playlist />}></Route>
        <Route path="song/:id" element={<Song/>}></Route>
        <Route path="album/:id" element={<Song />}></Route>
        <Route path="rooms" element={<Rooms/>}></Route>
        <Route path="liked" element={<Liked_list/>}></Route>
        <Route path="friends" element={<Friends/>}></Route>
      </Routes>
      <Player/>
    </div>
  );
};

export default App;

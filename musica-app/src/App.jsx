import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Playlist from "./components/playlist/Playlist";
import Header from "./components/header/Header";
import Song from "./components/song/Song";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Header/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="playlist" element={<Playlist />}></Route>
        <Route path="song/:id" element={<Song/>}></Route>
        <Route path="album/:id" element={<Song/>}></Route>
      </Routes>
    </div>
  );
};

export default App;

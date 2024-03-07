// import React, { useEffect, useState } from 'react'
import Songs from './Songs/Songs'
import './Main.scss'
import NewRealizes from './Songs/NewRealizes'
import Header from './header/Header'

const Main = () => {

  // const [music, setMusic] = useState([])

  // const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '6be32b6585msh739088a21dcd723p1cf50cjsn8c4f40ca3427',
  //     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  //   }
  // };

  // const getMusic = () => {
  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data) {
  //         setMusic(data.data)
  //       }
  //     });
  // }
  // useEffect(() => {
  //   getMusic()
  // }, [])

  return (
    <div className='Main'>
      <Header/>
      <div className="container">
        <Songs />
        <NewRealizes />
      </div>
    </div>
  )
}

export default Main
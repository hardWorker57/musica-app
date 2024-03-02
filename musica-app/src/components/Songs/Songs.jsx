import React, { useEffect, useState } from 'react'
import s from './Songs.module.scss'
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Songs = () => {
  
  const [music, setMusic] = useState([])

  const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
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
  }, [])

  return (
    <div>
      <div className={s.top_charts}>
        <div className={s.main_cover}><img src={music[0] && music[0].album ? music[0].album.cover_xl : ''} alt="" /></div>
        <div className={s.top_charts_wrap}>
          <div className='block_title'>Top charts</div>
          <div className="chart_els">
            {music.length > 0 && music.slice(0, 4).map((song, index) => (
              <Link to={`/song/${song ? song.id : ''}`} key={index}>
                <div className="charts_el">
                  <img src={song ? song.album.cover_small : ''} alt="no img" />
                  <div className={s.song_data}>
                    <div className={s.song_title}>{ song ? song.title : ''}</div>
                    <div className={s.song_author}>{ song.artist ? song.artist.name : '' }</div>
                    <div className={s.song_duration}>{ song ? song.duration : '' }</div>
                  </div>
                  <div className="like"><CiHeart /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
  )
}

export default Songs
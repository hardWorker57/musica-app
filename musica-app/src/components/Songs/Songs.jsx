import React, { useEffect, useState } from 'react'
import s from './Songs.module.scss'
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

const Songs = ({musicData}) => {

  return (
    <div>
      <div className={s.top_charts}>
        <div className={s.main_cover_wrap}>
          <Swiper
            // spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation
            // pagination={{ clickable: true }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            
            className="swiper_wrap"
          >
            {musicData.map((song, i) => (
              <SwiperSlide className="swiper">
                <Link to={`/song/${song ? song.id : ''}`} key={i}>
                  <div className={s.main_cover}>
                    <img src={song && song.album ? song.album.cover_xl : ''} alt="" />
                  </div>
                </Link>
              </SwiperSlide>  
            ))}
          </Swiper>
        </div>
          
        <div className={s.top_charts_wrap}>
          <div className='block_title'>Top charts</div>
          <div className="chart_els">
            {musicData.length > 0 && musicData.slice(0, 4).map((song, index) => (
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
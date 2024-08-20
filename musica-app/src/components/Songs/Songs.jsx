import React from "react";
import s from "./Songs.module.scss";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import 'swiper/css/effect-fade';
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import FadeLeft from "../ui/animations/FadeLeft";
import Grow from "../ui/animations/Grow";

const Songs = ({ musicData }) => {
  return (
    <div>
      <div className={s.top_charts}>
        <div className={s.main_cover_wrap}>
          <Grow delay={.5}>
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation
              loop={true}
              effect={'fade'}
              modules={[Autoplay, Navigation, EffectFade]}
              className="swiper_wrap"
            >
              {musicData.map((song, i) => (
                <SwiperSlide className="swiper">
                  <Link to={`/song/${song ? song.id : ""}`} key={i}>
                    <div className={s.main_cover}>
                      <img
                        src={song && song.album ? song.album.cover_xl : ""}
                        alt=""
                      />
                      <div className={s.main_cover_text}>{song ? song.title : ""}</div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grow>
        </div>
        
        <div className={s.top_charts_wrap}>
          <div className="block_title">Top charts</div> <br />
          <div className="chart_els">
            {musicData.length > 0 &&
              musicData.slice(0, 20).map((song, index) => (
                <FadeLeft delay={index * 0.15}>
                  <Link to={`/song/${song ? song.id : ""}`} key={index}>
                    <div className="charts_el">
                      <img
                        src={song ? song.album.cover_small : ""}
                        alt="no img"
                      />
                      <div className={s.song_data}>
                        <div className={s.song_title}>
                          {song ? song.title : ""}
                        </div>
                        <div className={s.song_author}>
                          {song.artist ? song.artist.name : ""}
                        </div>
                        <div className={s.song_duration}>
                          {song ? (Math.floor(song.duration/60) + " : " + (Math.floor(song.duration%60) / 10 < 1 ? "0" + Math.floor(song.duration%60) : (Math.floor(song.duration%60) !== 0 ? Math.floor(song.duration%60) : '00'))) : ""}
                        </div>
                      </div>
                      <div className="like">
                        <CiHeart />
                      </div>
                    </div>
                  </Link>
                </FadeLeft>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;

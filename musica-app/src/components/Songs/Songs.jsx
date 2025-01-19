import React, { useContext, useEffect, useState } from "react";
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
import TrackContext from "../store/TrackContext";

const Songs = ({ musicData }) => {
  const { setPlaylistData, setIsPlaylist, setCurrentTrackIdx, trackIsEnded, updateData, nextTrack, prevTrack, setNextTrack, setPrevTrack } = useContext(TrackContext);
  const [currentTrack, setCurrentTrack] = useState(0);
  setIsPlaylist(true);
  const handleData = () => {
    if (musicData) {
      setPlaylistData(musicData);
    }
  }
  useEffect(() => {
      if(nextTrack) {
        setCurrentTrack((prev) => prev + 1);
        setNextTrack(false);
      }
      if(prevTrack) {
        setCurrentTrack((prev) => prev - 1);
        setPrevTrack(false);
      }
      updateData(musicData[currentTrack])
    }, [nextTrack, prevTrack])
    useEffect(() => {
      if(trackIsEnded) {
        setCurrentTrack((prev) => prev + 1);
      }
      updateData(musicData[currentTrack]);
    }, [trackIsEnded]);
  useEffect(() => {
    setCurrentTrackIdx(currentTrack);
  }, [updateData])

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
                  <div key={index} onClick={() => {updateData(song); setCurrentTrack(index); handleData()}}>
                    <div className={`charts_el ${index === currentTrack ? "charts_el_active" : ''}`}>
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
                  </div>
                </FadeLeft>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Songs;

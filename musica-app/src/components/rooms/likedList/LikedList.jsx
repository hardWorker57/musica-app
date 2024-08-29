import React, { useContext, useEffect, useState } from "react";
import TrackContext from "../../store/TrackContext";
import { FaHeart } from "react-icons/fa";
import css from "./LikedList.module.scss"
import Grow from "@/components/ui/animations/Grow";

const Liked_list = () => {
  const {likedList, deleteLiked, updateData, trackIsEnded, setNextTrack, setPrevTrack, nextTrack, prevTrack, setIsPlaylist} = useContext(TrackContext);
  const [currentTrack, setCurrentTrack] = useState(0);

  useEffect(() => {
    setIsPlaylist(true);
  }, [])
  useEffect(() => {
    if(nextTrack) {
      setCurrentTrack((prev) => prev + 1);
      setNextTrack(false);
    }
    if(prevTrack) {
      setCurrentTrack((prev) => prev - 1);
      setPrevTrack(false);
    }
    updateData(likedList[currentTrack])
  }, [nextTrack, prevTrack])
  useEffect(() => {
    if(trackIsEnded) {
      setCurrentTrack((prev) => prev + 1);
    }
    updateData(likedList[currentTrack]);
  }, [trackIsEnded]);
  return (
    <div className={css.Liked_list}>
      <div className="container">
        <br />
        <div className="block_title">Liked list</div>
          <div className={css.liked_list}>
            {likedList && likedList.map((item, i) => (
              <Grow delay={i*0.1}>
                <div className={`${css.list_item} ${i === currentTrack ? css.list_item_active : ''}`} key={i} onClick={() => {updateData(item); setCurrentTrack(i)}}>
                  <div className={css.list_item_data}>
                    <div className={css.list_item_img_wrap}>
                      <img
                        src={item ? item.album.cover_medium : ''}
                        alt={item ? item.album.title : ''}
                        className={css.list_item_img}
                      />
                    </div>
                    <div className={css.item_data}>
                      <div className={css.item_title}>{item ? item.title : ''}</div>
                      <div className={css.item_artist}>{item ? item.artist.name : ''}</div>
                    </div>
                  </div>
                  <div className={css.delete}><button onClick={() => deleteLiked(i)}><FaHeart/></button></div>
                </div>
              </Grow>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Liked_list;

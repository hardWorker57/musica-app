import React, { useContext, useEffect, useState } from "react";
import TrackContext from "../../store/TrackContext";
import css from "./LikedList.module.scss"

const Liked_list = () => {
  const {likedList, updateData, trackIsEnded, setTrackIsEnded} = useContext(TrackContext);
  const [currentTrack, setCurrentTrack] = useState(0);

  function nextTrack() {
    setTrackIsEnded(true);
  }
  useEffect(() => {
    // nextTrack();
    console.log('yay');
    updateData(likedList[currentTrack]);
    setCurrentTrack((prev) => prev + 1);
  }, [trackIsEnded]);
  return (
    <div className={css.Liked_list}>
      <div className="container">
        <br />
        <div className="block_title">Liked list</div>
        <div className={css.liked_list}>
          {likedList && likedList.map((item, i) => (
            <div className={css.list_item} key={i} onClick={() => {updateData(item); setCurrentTrack(i+1)}}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Liked_list;

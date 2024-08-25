import React, { useContext } from "react";
import TrackContext from "../store/TrackContext";

const Liked_list = () => {
  const {likedList} = useContext(TrackContext)
  return (
    <div className="Liked_list">
      <div className="container">
        <br />
        <div className="block_title">Liked list</div>
        <div className="liked_list">
          {likedList && likedList.map((item) => (
            <div className="list_item" key={item ? item.id : ''}>
              <div className="list_item_img">
                <img
                  src={item ? item.album.cover_xl : ''}
                  alt={item ? item.album.title : ''}
                  className="list_item_img"
                />
              </div>
              <div className="list_item_title">{item ? item.title : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Liked_list;

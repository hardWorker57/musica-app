import React, { useContext, useRef, useState } from "react";
import s from "./Player.module.scss";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { FaPlayCircle } from "react-icons/fa";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { FaPauseCircle } from "react-icons/fa";
import { CiShuffle } from "react-icons/ci";
import { LuRepeat1 } from "react-icons/lu";
import FadeUp from "../ui/animations/FadeUp";
import TrackContext from "../store/TrackContext";

const Player = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { data } = useContext(TrackContext);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={s.Player}>
      <div className={s.player_wrap}>
        <div className={s.player_song}>
          <img src={data.album ? data.album.cover : ""} alt="no image" />
          <div className={s.content}>
            <div className={s.title}>{data ? data.title_short : ""}</div>
            <div className={s.author}>
              {data.artist ? data.artist.name : ""}
            </div>
          </div>
        </div>
        <div className={s.player_params}>
          <div className={s.shuffle}>
            <CiShuffle />
          </div>
          <div className={s.prev}>
            <MdSkipPrevious />
          </div>
          <div className={s.play} onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <span onClick={pauseAudio}><FaPauseCircle /></span> : <span onClick={playAudio}><FaPlayCircle /></span>}
            <div className="audio">
              <div>
                <audio
                  ref={audioRef}
                  src={data.preview}
                  preload="metadata"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
          <div className={s.next}>
            <MdSkipNext />
          </div>
          <div className={s.repeat}>
            <LuRepeat1 />
          </div>
        </div>
        <div className={s.player_volume} onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave />}
        </div>
      </div>
    </div>
  );
};

export default Player;

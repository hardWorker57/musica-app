import React, { useContext, useEffect, useRef, useState } from "react";
import s from "./Player.module.scss";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { FaPlayCircle } from "react-icons/fa";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { FaPauseCircle } from "react-icons/fa";
import { CiShuffle } from "react-icons/ci";
import { LuRepeat1 } from "react-icons/lu";
import TrackContext from "../store/TrackContext";

const Player = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const { data } = useContext(TrackContext);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
        const newMuteState = !isMuted;
        audioRef.current.muted = newMuteState;
        setIsMuted(newMuteState);
    }
  };
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    if (audioRef.current) {
        audioRef.current.volume = newVolume;
    }
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
    }
};
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
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [])

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
        <div className={s.player_volume}>
          {isMuted ? <span onClick={toggleMute}><HiSpeakerXMark /></span> : <span ><HiSpeakerWave onClick={toggleMute}/></span>}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            disabled={isMuted}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;

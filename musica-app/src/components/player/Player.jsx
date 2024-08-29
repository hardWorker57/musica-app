import React, { useContext, useEffect, useRef, useState } from "react";
import s from "./Player.module.scss";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { CiShuffle } from "react-icons/ci";
import { LuRepeat1 } from "react-icons/lu";
import TrackContext from "../store/TrackContext";

const Player = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const { data, setTrackIsEnded, trackIsEnded, setNextTrack, nextTrack, setPrevTrack, prevTrack, isPlaylist } = useContext(TrackContext);
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

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    // if(isPlaying) {
    //   setIsPlaying(false)
    // }
    // setIsPlaying(!isPlaying);
    isPlaylist && handlePlayPause();
  }, [trackIsEnded, nextTrack, prevTrack]);
  useEffect(() => {
    isPlaylist && handlePlayPause();
    setIsPlaying(false);
    setTrackIsEnded(false);
  }, [data]);
  useEffect(() => {
    audioRef.current.volume = volume;
    const audioElement = audioRef.current;
    const onEnded = () => {
      setIsPlaying(false);
      setTrackIsEnded(true);
    }
    if (audioElement) {
      audioElement.addEventListener("ended", onEnded);
    }
    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", onEnded);
      }
    };
  }, []);

  return (
    <div className={s.Player}>
      <div className={s.player_wrap}>
        <div className={s.player_song}>
          <img src={data.album ? data.album.cover : "https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"} alt="no image" />
          <div className={s.content}>
            <div className={s.title}>{data ? data.title_short : "choose a song"}</div>
            <div className={s.author}>
              {data.artist ? data.artist.name : ""}
            </div>
          </div>
        </div>
        <div className={s.player_params}>
          <div className={s.shuffle}>
            <CiShuffle />
          </div>
          <div className={s.prev} onClick={() => setPrevTrack(true)}>
            <MdSkipPrevious />
          </div>
          <div className={s.play} onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? (
              <span onClick={handlePlayPause}>
                <FaPauseCircle />
              </span>
            ) : (
              <span onClick={handlePlayPause}>
                <FaPlayCircle />
              </span>
            )}
            <div className="audio">
              <div>
                <audio ref={audioRef} src={data.preview} preload="metadata">
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
          <div className={s.next} onClick={() => setNextTrack(true)}>
            <MdSkipNext />
          </div>
          <div className={s.repeat}>
            <LuRepeat1 />
          </div>
        </div>
        <div className={s.player_volume}>
          {isMuted ? (
            <span onClick={toggleMute}>
              <HiSpeakerXMark />
            </span>
          ) : (
            <span>
              <HiSpeakerWave onClick={toggleMute} />
            </span>
          )}
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

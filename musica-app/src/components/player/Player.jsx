import React, { useState } from 'react'
import s from './Player.module.scss'
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";

const Player = () => {
    const [isMuted, setMute] = useState(false);
  return (
    <div className={s.Player}>
        <div className={s.player_wrap}>
            <div className={s.player_song}>
                  <img src="data:image/jpeg;base64,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" alt="no image" />
                <div className={s.content}>
                    <div className={s.title}>title</div>
                    <div className={s.author}>author</div>
                </div>
            </div>
            <div className={s.player_params}>player</div>
            <div className={s.player_volume}>{ isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave /> }</div>
        </div>
    </div>
  )
}

export default Player
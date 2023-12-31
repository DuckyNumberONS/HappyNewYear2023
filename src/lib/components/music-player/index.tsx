"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "../music-player/style.css";
import { Howl, Howler } from "howler";
import { Track } from "@/lib/model/track";

interface Props {
  tracks: Array<Track>;
}
const MusicPlayer: React.FC<Props> = ({ tracks }) => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [loop, setLoop] = useState(false);
  const [muted, setMuted] = useState(false);
  // const audioRef = useRef(null);
  const currentTrack = tracks && tracks[index];
  const [audio, setAudio] = useState(
    new Howl({
      src: [tracks[index].songSrc],
      volume,
      loop,
      onend: function () {
        playNext();
      },
    })
  );

  // const audio = new Howl({
  //   src: [tracks[index].songSrc],
  //   loop: true,
  //   volume: 0.5,
  // });

  const playPause = () => {
    if (isPlaying) {
      console.log("pause");
      audio.pause();
    } else {
      console.log("play");
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const nextIndex = index + 1;
    if (nextIndex >= 0 && nextIndex <= tracks.length - 1) {
      if (audio) {
        audio.unload();
      }
      setIndex(nextIndex);
      const newAudio = new Howl({
        src: [tracks[nextIndex].songSrc],
        volume,
      });

      newAudio.play();
      // setAudio(newAudio);
    }
    console.log("Next");
  };

  const playPrev = () => {
    const prevIndex = index - 1;
    if (prevIndex >= 0 && prevIndex <= tracks.length - 1) {
      if (audio) {
        audio.unload();
      }
      setIndex(prevIndex);
      const newAudio = new Howl({
        src: [tracks[prevIndex].songSrc],
        volume,
      });

      newAudio.play();
      // setAudio(newAudio);
    }
    console.log("Prev");
  };

  const handleChangeVolume = (value: any) => {
    console.log("🚀 ~ file: index.tsx:84 ~ handleChangeVolume ~ value:", value);
    // const valueVolume = value / 100;
    // setVolume(valueVolume);
    // setAudio(value)
    audio.volume(value);
    console.log("after update volume:", audio.volume());
  };

  return (
    <div>
      <div className="player">
        <div
          className={`song-panel  ${
            !isPlaying && "transform translate-y-full"
          }`}
        >
          <div className="song-info">
            <div className="song-info__title">{currentTrack.title}</div>
            <div className="song-info__artist">Bensound</div>
            <div className="progress">
              <div className="progress__filled"></div>
            </div>
          </div>
        </div>
        <div className="player-controls">
          <div className="spinner">
            <div
              className={`spinner__disc ${
                isPlaying ? "animate-spin-slow" : ""
              }`}
              style={{
                backgroundImage:
                  "url(https://www.bensound.com/bensound-img/ukulele.jpg)",
              }}
            >
              <div className="center__disc"></div>
            </div>
          </div>
          <button
            className="button-music backward flex items-center justify-center"
            onClick={playPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              id="backward"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 29 29"
              xmlSpace="preserve"
            >
              <path d="M14.5 20.529V8.471c0-.92-1.002-1.489-1.792-1.019L2.579 13.481a1.186 1.186 0 0 0 0 2.038l10.129 6.029c.79.47 1.792-.099 1.792-1.019z"></path>
              <path d="M27 20.529V8.471c0-.92-1.002-1.489-1.792-1.019l-10.129 6.029a1.186 1.186 0 0 0 0 2.038l10.129 6.029c.79.47 1.792-.099 1.792-1.019z"></path>
            </svg>
          </button>
          <button
            className="button-music play flex items-center justify-center"
            onClick={playPause}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="music"
                width="24"
                height="24"
                x="0"
                y="0"
                version="1.1"
                viewBox="0 0 29 29"
                xmlSpace="preserve"
              >
                <path d="M12.5 3v23a1 1 0 01-1 1h-4a1 1 0 01-1-1V3a1 1 0 011-1h4a1 1 0 011 1zM22.5 3v23a1 1 0 01-1 1h-4a1 1 0 01-1-1V3a1 1 0 011-1h4a1 1 0 011 1z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                id="play"
              >
                <path
                  fill="#000"
                  d="M7 17.259V6.741a1 1 0 0 1 1.504-.864l9.015 5.26a1 1 0 0 1 0 1.727l-9.015 5.259A1 1 0 0 1 7 17.259Z"
                ></path>
              </svg>
            )}
          </button>
          <button
            className="button-music forward flex items-center justify-center"
            onClick={playNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              id="forward"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 29 29"
              xmlSpace="preserve"
              style={{ transform: "rotateY(180deg)" }}
            >
              <path d="M14.5 20.529V8.471c0-.92-1.002-1.489-1.792-1.019L2.579 13.481a1.186 1.186 0 0 0 0 2.038l10.129 6.029c.79.47 1.792-.099 1.792-1.019z"></path>
              <path d="M27 20.529V8.471c0-.92-1.002-1.489-1.792-1.019l-10.129 6.029a1.186 1.186 0 0 0 0 2.038l10.129 6.029c.79.47 1.792-.099 1.792-1.019z"></path>
            </svg>
          </button>
          {/* <div className="absolute bottom-0 mr-3">
            <label htmlFor="points">Volume</label>
            <input
              type="range"
              id="points"
              name="points"
              // value={volume * 100}
              onChange={(e) => handleChangeVolume(e.target.value)}
              min="0"
              max="100"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default MusicPlayer;

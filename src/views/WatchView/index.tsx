import {MouseEvent,  useEffect, useState } from "react";
import { data as episode } from "../../services/animeEpisode/episode";
import { instance } from "../../services/api/axios";
import { useLocation } from "react-router-dom";
import './index.scss'

type episodeObj = {
  url: string;
};

export function WatchView() {
  const [episodeInfo, setEpisodeInfo] = useState<episodeObj>();
  const location = useLocation();
  // eslint-disable-next-line
  
    
  const getEpisodeId = () => {
    const urlEnd = window.location.href.indexOf("animes/");
    return window.location.href.slice(urlEnd);
  };
  const episodeData = async () => {
    const newEpisodeData = await episode(getEpisodeId());
    setEpisodeInfo(newEpisodeData);
  };
  useEffect(() => {
    episodeData()
    // eslint-disable-next-line
  }, []);
  const handleClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const episodePlayer = document.getElementById('video') as HTMLVideoElement
    const otherButton = document.querySelector('.active')
    otherButton.classList.toggle('active')
    event.currentTarget.classList.toggle('active')
    if(event.currentTarget.innerText === 'Player 2') {
      episodePlayer.src = episodeInfo?.url
    }
    else{
      episodePlayer.src = `${instance.defaults.baseURL}watch?url=${getEpisodeId()}&site=animefire`}
  }

  return (
    <>
      <div id="player">
      <video src={`${
          instance.defaults.baseURL
        }watch?url=${getEpisodeId()}&site=animefire`} controls id="video"></video>
    </div>
    <div id="playerSelect">
      <button onClick={handleClick} className="active button">Player 1</button>
      <button onClick={handleClick} className="button">Player 2</button>
    </div>
    </>
  );
}

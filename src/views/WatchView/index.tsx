import {MouseEvent,  useEffect, useState } from "react";
import { data as episode } from "../../services/animeEpisode/episode";
import ReactPlayer from "react-player";
import { instance } from "../../services/api/axios";
import { useLocation } from "react-router-dom";
import './index.scss'

type episodeObj = {
  url: string;
};

export function WatchView() {
  const [episodeInfo, setEpisodeInfo] = useState<episodeObj>();
  const location = useLocation();
  const { episodes } = location.state;
  
    
  const getEpisodeId = () => {
    const urlEnd = window.location.href.indexOf("animes/");
    return window.location.href.slice(urlEnd);
  };
  const episodeData = async () => {
    const newEpisodeData = await episode(getEpisodeId());
    console.log(newEpisodeData);
    setEpisodeInfo(newEpisodeData);
  };
  useEffect(() => {
    episodeData();
    // eslint-disable-next-line
  }, []);
  const handleClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const episodePlayer = document.getElementById('player')
    const otherButton = document.querySelector('.active')
    otherButton.classList.toggle('active')
    event.currentTarget.classList.toggle('active')
    if(event.currentTarget.value === 'Player 2') {
      console.log(event.currentTarget.value)
      episodePlayer.innerHTML = `<div style="width: 640px; height: 360px;">
      <video src=${episodeInfo.url} preload="auto" controls="" style="width: 100%; height: 100%;"></video>
    </div>`
    }
    else{
      episodePlayer.innerHTML = `<div style="width: 640px; height: 360px;">
      <video src=${instance.defaults.baseURL}watch?url=${getEpisodeId()}&site=animefire preload="auto" controls="" style="width: 100%; height: 100%;"></video>
      </div>`
    }
  }

  return (
    <>
      <div id="player">
      <ReactPlayer
        url={`${
          instance.defaults.baseURL
        }watch?url=${getEpisodeId()}&site=animefire`}
        controls
      />
    </div>
    <div id="playerSelect">
      <button onClick={handleClick} className="active button">Player 1</button>
      <button onClick={handleClick} className="button">Player 2</button>
    </div>
    </>
  );
}

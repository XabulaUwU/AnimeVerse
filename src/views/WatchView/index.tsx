import { useEffect, useState } from "react";
import { data as episode } from "../../services/animeEpisode/episode";
import ReactPlayer from "react-player";
import { instance } from "../../services/api/axios";
import { useLocation } from "react-router-dom";
type episodeObj = {
  url: string;
};

export function WatchView() {
  const [episodeInfo, setEpisodeInfo] = useState<episodeObj>();
  const location = useLocation();
  const { episodes } = location.state;
  const getEpisodeId = () => {
    const urlEnd = window.location.href.indexOf("animes/");
    console.log(window.location.href.slice(urlEnd));
    return window.location.href.slice(urlEnd);
  };
  const episodeData = async () => {
    const newEpisodeData = await episode(getEpisodeId());
    console.log(newEpisodeData);
    setEpisodeInfo(newEpisodeData);
  };
  useEffect(() => {
    //episodeData();
    console.log(episodes);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <ReactPlayer
        url={`${
          instance.defaults.baseURL
        }watch?url=${getEpisodeId()}&site=animefire`}
        controls
      />
    </div>
  );
}

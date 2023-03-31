import { useEffect, useState } from "react";
import { data as episode } from "../../services/animeEpisode/episode";
import ReactPlayer from "react-player";
import { instance } from "../../services/api/axios";
type episodeObj = {
  url: string;
};

export function WatchView() {
  const [episodeInfo, setEpisodeInfo] = useState<episodeObj>();
  const getEpisodeId = () => {
    const urlEnd = window.location.href.indexOf("/animes/");
    return window.location.href.slice(urlEnd);
  };
  const episodeData = async () => {
    const newEpisodeData = await episode(getEpisodeId());
    console.log(newEpisodeData);
    setEpisodeInfo(newEpisodeData);
  };
  useEffect(() => {
    episodeData();
    console.log(
      `${instance.defaults.baseURL}watch?url=${getEpisodeId()}&site=animefire`
    );
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <ReactPlayer
        url={
          episodeInfo?.url
            ? episodeInfo.url
            : `${
                instance.defaults.baseURL
              }watch?url=${getEpisodeId()}&site=animefire`
        }
        controls
      />
    </div>
  );
}

import { useEffect, useState } from "react";
import { data as episode } from "../../services/animeEpisode/episode";
import ReactPlayer from "react-player";
type episodeObj = {
  headers: {
    Referer: "string";
    watchsb: "string"; // or null, since only provided with server being equal to "streamsb".
    "User-Agent": "string"; // or null
  };
  sources: [
    {
      url: "string";
      quality: "string";
      isM3U8: true;
    }
  ];
};

export function WatchView() {
  const [episodeInfo, setEpisodeInfo] = useState<episodeObj>();
  const getEpisodeId = () => {
    return window.location.href.slice(28);
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
  return <ReactPlayer url={episodeInfo?.sources[0].url} controls />;
}

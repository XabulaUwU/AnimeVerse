import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data as info } from "../../services/animeInfo/getAnimeInfo";
import "./index.scss";
type animeInfoObject = {
  id: string;
  title: string;
  url: string;
  image: string;
  releaseDate: string | null;
  description: string | null;
  genres: [string];
  subOrDub: string;
  type: string | null;
  status: string;
  otherName: string | null;
  totalEpisodes: number;
  episodes: [
    {
      id: string;
      number: number;
      url: string;
    }
  ];
};

export function InfoView() {
  const [episodesInfo, setEpisodesInfo] = useState<animeInfoObject>();
  const getAnimeId = () => {
    return window.location.href.slice(28);
  };
  const animeInfo = async () => {
    const animeInfoList = await info(getAnimeId());
    console.log(animeInfoList);
    setEpisodesInfo(animeInfoList);
  };

  useEffect(() => {
    animeInfo();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div id="information">
        <div id="info">
          <h1>{episodesInfo?.title}</h1>
          <h2>Synopses: {episodesInfo?.description}</h2>
          <h2>Also Known as: {episodesInfo?.otherName}</h2>
          <h2>Release Date: {episodesInfo?.releaseDate}</h2>
          <h2>Status: {episodesInfo?.status}</h2>
          <h2>Is subbed? {episodesInfo?.subOrDub === "sub" ? "yes" : "no"}</h2>
          <h2>Total Episodes: {episodesInfo?.totalEpisodes}</h2>
          <h2>Season: {episodesInfo?.type}</h2>
        </div>
        <img src={episodesInfo?.image} alt={episodesInfo?.title} />
      </div>
      <div id="episodes">
        {episodesInfo?.episodes.map((i, index) => {
          return (
            <div id="episode">
              <p>
                {episodesInfo?.title}: Episode {i.number}
              </p>
              <Link to={`/watch/${i.id}`}>
                <p className="watch">Watch</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

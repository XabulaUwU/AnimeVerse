import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data as info } from "../../services/animeInfo/getAnimeInfo";
import "./index.scss";
type animeInfoObject = {
  title: string;
  image: string;
  tags: [string];
  description: string;
  year: null | string;
  rating: number;
  seasons: [
    {
      title: string;
      episodes: [
        {
          title: string;
          url: string;
          image: string;
        }
      ];
    }
  ];
  related: [];
};

export function InfoView() {
  const [episodesInfo, setEpisodesInfo] = useState<animeInfoObject>();
  const getAnimeId = () => {
    const urlEnd = window.location.href.indexOf("/animes/");
    return window.location.href.slice(urlEnd);
  };
  const animeInfo = async () => {
    const animeInfoList = await info(getAnimeId());
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
          <p id="sin"><h2>Sinopse:</h2> {episodesInfo?.description}</p>
          <p>
            <h2>Data de Lançamento:</h2>
            {episodesInfo?.year == null
              ? " Não Informado"
              : ` ${episodesInfo?.year}`}
          </p>
          <p>
            <h2>Número de episódios:</h2> {episodesInfo?.seasons[0].episodes.length}
          </p>
        </div>
        <img src={episodesInfo?.image} alt={episodesInfo?.title} />
      </div>
      <div id="episodes">
        {episodesInfo?.seasons[0].episodes.map((i, index) => {
          return (
            <div id="episode" key={index}>
              <p>
                {episodesInfo?.title}: Episode {i.title}
              </p>
              <Link
                to={`/watch${i.url}`}
                state={{ episodes: episodesInfo?.seasons[0] }}
              >
                <p className="watch">Watch</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

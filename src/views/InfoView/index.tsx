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
          <h2>Sinopse: {episodesInfo?.description}</h2>
          <h2>
            Data de Lançamento:
            {episodesInfo?.year ? ` ${episodesInfo?.year}` : " Não Informado"}
          </h2>
          <h2>
            Número de episódios: {episodesInfo?.seasons[0].episodes.length}
          </h2>
        </div>
        <img src={episodesInfo?.image} alt={episodesInfo?.title} />
      </div>
      <div id="episodes">
        {episodesInfo?.seasons[0].episodes.map((i, index) => {
          return (
            <div id="episode">
              <p>
                {episodesInfo?.title}: Episode {i.title}
              </p>
              <Link to={`/watch${i.url}`}>
                <p className="watch">Watch</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

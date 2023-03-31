import { useEffect, useState } from "react";
import { EpisodeView } from "../../components/AnimeComponent";
import { data as search } from "../../services/animeSearch/animeSearch";
import "./index.scss";

type animeSearchObj = {
  items: [
    {
      title: string;
      image: string;
      url: string;
    }
  ];
  page: number;
  hasNext: boolean;
  total: number;
};
export function AnimeSearch() {
  const [animeSearch, setAnimeSearch] = useState<animeSearchObj>();
  const getSearchId = () => {
    const urlEnd = window.location.href.indexOf("search/");
    return window.location.href.slice(urlEnd + 7);
  };
  const getAnimeSearch = async () => {
    const searchList = await search(getSearchId());
    setAnimeSearch(searchList);
  };
  useEffect(() => {
    getAnimeSearch();
  }, []);
  return (
    <>
      <div className="searchContainer">
        {animeSearch?.items.map((i, index) => {
          if (index > 0 && index < 5)
            return (
              <EpisodeView
                image={i.image}
                title={i.title}
                id={i.url}
                key={index}
              />
            );
        })}
      </div>
      <div className="searchContainer">
        {animeSearch?.items.map((i, index) => {
          if (index > 3 && index < 8)
            return (
              <EpisodeView
                image={i.image}
                title={i.title}
                id={i.url}
                key={index}
              />
            );
        })}
      </div>
      <div className="searchContainer">
        {animeSearch?.items.map((i, index) => {
          if (index > 7 && index < 12)
            return (
              <EpisodeView
                image={i.image}
                title={i.title}
                id={i.url}
                key={index}
              />
            );
        })}
      </div>
      <div className="searchContainer">
        {animeSearch?.items.map((i, index) => {
          if (index > 11 && index < 16)
            return (
              <EpisodeView
                image={i.image}
                title={i.title}
                id={i.url}
                key={index}
              />
            );
        })}
      </div>
      <div className="searchContainer">
        {animeSearch?.items.map((i, index) => {
          if (index > 15 && index < 20)
            return (
              <EpisodeView
                image={i.image}
                title={i.title}
                id={i.url}
                key={index}
              />
            );
        })}
      </div>
      <div className="searchContainer">
        {animeSearch?.items.map((i, index) => {
          if (index > 19 && index < 24)
            return (
              <EpisodeView
                image={i.image}
                title={i.title}
                id={i.url}
                key={index}
              />
            );
        })}
      </div>
      <div className="searchContainer">
        {animeSearch?.items.map((i, index) => {
          if (index > 23 && index < 28)
            return (
              <EpisodeView
                image={i.image}
                title={i.title}
                id={i.url}
                key={index}
              />
            );
        })}
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { EpisodeView } from "../../components/AnimeComponent";
import { data as search } from "../../services/animeSearch/animeSearch";
import "./index.scss";
import React from "react";

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
  const length = Math.floor(animeSearch?.items.length / 4) + 1
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
  {animeSearch?.items.map((i, index) => {
  const containerIndex = Math.floor(index / 4);
  const shouldRender = index % 4 === 0;

  return shouldRender ? (
    <div className="searchContainer" key={containerIndex}>
      {animeSearch.items.slice(index, index + 4).map((item, itemIndex) => (
        <EpisodeView
          image={item.image}
          title={item.title}
          id={item.url}
          key={itemIndex}
        />
      ))}
    </div>
  ) : null;
})}
  </>);
}

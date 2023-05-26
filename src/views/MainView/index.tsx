import { useEffect, useState } from "react";
import { data as recent } from "../../services/recentEpisodes/recentEpisodes";
import { EpisodeView } from "../../components/AnimeComponent";
import { data as top } from "../../services/popular/popular";
import "./mainView.scss";
type recentEpisodesList = {
  items: [
    {
      title: string;
      image: string;
      url: string;
    }
  ];
  page: number;
  hasNext: boolean;
  total: -1;
};
type popular = {
  items: [
    {
      title: string; //"Shingeki no Kyojin: The Final Season - Kanketsu-hen";
      image: string; //"https://animefire.net/img/animes/shingeki-no-kyojin-the-final-season-kanketsu-hen.jpg?v=1";
      url: string; //"/animes/shingeki-no-kyojin-the-final-season-kanketsu-hen-todos-os-episodios";
    }
  ];
  page: 1;
  hasNext: true;
  total: -1;
};

export function MainView() {
  const [recentEpisodes, setRecentEpisodes] = useState<recentEpisodesList>();
  const [popular, setPopular] = useState<popular>();
  const hiddenElements = document.querySelectorAll('.hidden');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  
  hiddenElements.forEach((el) => {
    observer.observe(el);
  });
  const recentEpisodesData = async () => {
    const recentEpisodesList = await recent();
    setRecentEpisodes(recentEpisodesList);
  };
  const topAiringData = async () => {
    const popularList = await top();
    setPopular(popularList);
  };

  useEffect(() => {
    recentEpisodesData();
    topAiringData();
  }, []);


  return (
    <main>
      <h1>Recent Episodes</h1>
      <div className="recentContainer hidden">
      {recentEpisodes?.items.map((i, index) => {
      const containerIndex = Math.floor(index / 4);
      const shouldRender = index % 4 === 0;

      return shouldRender ? (
        <div className="recent" id={`container-${containerIndex}`} key={containerIndex}>
          {recentEpisodes.items.slice(index, index + 4).map((item, itemIndex) => (
            <EpisodeView
              title={item.title}
              image={item.image}
              id={item.url}
              key={itemIndex}
            />
          ))}
        </div>
      ) : null;
    })}
      </div>
      <h1>Popular Anime</h1>
      <div className="popularContainer">
      {popular?.items.map((i, index) => {
      const containerIndex = Math.floor(index / 4);
      const shouldRender = index % 4 === 0;

      return shouldRender ? (
        <div className="popularMain" id={`container-${containerIndex}`} key={containerIndex}>
          {popular.items.slice(index, index + 4).map((item, itemIndex) => (
            <EpisodeView
              title={item.title}
              image={item.image}
              id={item.url}
              key={itemIndex}
            />
          ))}
        </div>
      ) : null;
    })}
      </div>
  </main>

  );
  
}

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
  const hiddenElements = document.querySelectorAll('.hidden')
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('show')
        console.log(entry)
      }else{
        entry.target.classList.remove('show')
      }
    })
  })
  hiddenElements.forEach(el => {
    observer.observe(el)
  })
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
      <div className="recent hidden" id="first">
        {recentEpisodes?.items.map((i, index) => {
          if (index < 4) {
            return (
              <EpisodeView
                title={i.title}
                image={i.image}
                key={index}
                id={i.url}
              />
            );
          }
          return "";
        })}
      </div>
      <div className="recent hidden" id="second">
        {recentEpisodes?.items.map((i, index) => {
          if (index > 3 && index < 8) {
            return (
              <EpisodeView
                title={i.title}
                image={i.image}
                key={index}
                id={i.url}
              />
            );
          }
          return "";
        })}
      </div>
      <div className="recent hidden" id="third">
        {recentEpisodes?.items.map((i, index) => {
          if (index > 7 && index < 13) {
            return (
              <EpisodeView
                title={i.title}
                image={i.image}
                key={index}
                id={i.url}
              />
            );
          }
          return "";
        })}
      </div>
      <h1>Popular Anime</h1>
      <div className="popularContainer hidden">
        {popular?.items.map((i, index) => {
          if (index < 5) {
            return (
              <EpisodeView
                title={i.title}
                image={i.image}
                id={i.url}
                key={index}
              />
            );
          }
          return "";
        })}
      </div>
      <div className="popularContainer hidden">
        {popular?.items.map((i, index) => {
          if (index > 4 && index < 10) {
            return (
              <EpisodeView
                title={i.title}
                image={i.image}
                id={i.url}
                key={index}
              />
            );
          }
          return "";
        })}
      </div>
    </main>
  );
}

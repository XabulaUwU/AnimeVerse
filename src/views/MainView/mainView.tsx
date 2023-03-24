import { useEffect, useState } from "react";
import { data as recent } from "../../services/recentEpisodes/recentEpisodes";
import { EpisodeView } from "../../components/AnimeComponent/animeComponent";
import { data as top } from "../../services/topAiring/topAiring";
import "./mainView.scss";
type recentEpisodesList = {
  currentPage: 0;
  hasNextPage: true;
  results: [
    {
      id: string;
      episodeId: string;
      episodeNumber: 0;
      title: string;
      image: string;
      url: string;
    }
  ];
};
type topAiringAnime = {
  currentPage: 0;
  hasNextPage: true;
  results: [
    {
      id: string;
      title: string;
      image: string;
      url: string;
      genres: [string];
    }
  ];
};

export function MainView() {
  const [recentEpisodes, setRecentEpisodes] = useState<recentEpisodesList>();
  const [topAiring, setTopAiring] = useState<topAiringAnime>();

  const recentEpisodesData = async () => {
    const recentEpisodesList = await recent();
    setRecentEpisodes(recentEpisodesList);
  };
  const topAiringData = async () => {
    const topAiringList = await top();
    console.log(topAiringList);
    setTopAiring(topAiringList);
  };

  useEffect(() => {
    recentEpisodesData();
    topAiringData();
  }, []);

  return (
    <main>
      <h1>Recent Episodes</h1>
      <div className="recent" id="first">
        {recentEpisodes?.results.map((i, index) => {
          if (index < 5) {
            return (
              <EpisodeView
                title={i.title}
                image={i.image}
                episodeNumber={i.episodeNumber}
                key={index}
              />
            );
          }
          return "";
        })}
      </div>
      <div className="recent" id="second">
        {recentEpisodes?.results.map((i, index) => {
          if (index > 4 && index < 10) {
            return (
              <EpisodeView
                title={i.title}
                image={i.image}
                episodeNumber={i.episodeNumber}
                key={index}
              />
            );
          }
          return "";
        })}
      </div>
      <div className="recent" id="third">
        {recentEpisodes?.results.map((i, index) => {
          if (index > 9 && index < 15) {
            return (
              <EpisodeView
                title={i.title}
                image={i.image}
                episodeNumber={i.episodeNumber}
                key={index}
              />
            );
          }
          return "";
        })}
      </div>
      <h1>Popular Anime</h1>
      <div className="popular">
        {topAiring?.results.map((i, index) => {
          if (index < 5) {
            return (
              <EpisodeView
                title={i.title}
                image={i.image}
                id={i.id}
                key={index}
              />
            );
          }
          return "";
        })}
      </div>
      <div className="popular">
        {topAiring?.results.map((i, index) => {
          if (index > 4) {
            return (
              <EpisodeView
                title={i.title}
                image={i.image}
                id={i.id}
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

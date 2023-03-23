import { useEffect, useState } from "react";
import { data as recent } from "../../../functions/recentEpisodes/recentEpisodes";
import { EpisodeView } from "../../episodeView/episodeView";
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

export function MainView() {
  const [recentEpisodes, setRecentEpisodes] = useState<recentEpisodesList>();
  const recentEpisodesData = async () => {
    const recentEpisodesList = await recent();
    setRecentEpisodes(recentEpisodesList);
  };
  useEffect(() => {
    recentEpisodesData();
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
      <div id="popular">Popular</div>
    </main>
  );
}

import { useEffect, useState } from "react";
import { data as recent } from "../../../functions/recentEpisodes/recentEpisodes";
import "./mainView.scss";
type recentEpisodesList = {
  currentPage: 0;
  hasNextPage: true;
  results: [
    {
      id: "string";
      episodeId: "string";
      episodeNumber: 0;
      title: "string";
      image: "string";
      url: "string";
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
      <h1>Anime Schedule</h1>
      <div id="schedule">{recentEpisodes?.currentPage}</div>
      <h1>Recent Episodes</h1>
      <div id="recent">Recent</div>
      <h1>Popular Anime</h1>
      <div id="popular">Popular</div>
    </main>
  );
}

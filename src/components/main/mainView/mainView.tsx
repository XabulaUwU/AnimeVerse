import { useEffect, useState } from "react";
import { data as recent } from "../../../functions/recentEpisodes/recentEpisodes";
import "./mainView.scss";
export function MainView() {
  const [recentEpisodes, setRecentEpisodes] = useState([]);
  const recentEpisodesData = async () => {
    const newData = await recent();
    console.log(newData);
    setRecentEpisodes(newData);
  };
  useEffect(() => {
    recentEpisodesData();
    console.log(recentEpisodes);
  }, []);
  return (
    <main>
      <h1>Anime Schedule</h1>
      <div id="schedule">Schedule</div>
      <h1>Recent Episodes</h1>
      <div id="recent">Recent</div>
      <h1>Popular Anime</h1>
      <div id="popular">Popular</div>
    </main>
  );
}

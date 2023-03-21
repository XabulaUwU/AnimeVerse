import { useEffect } from "react";
import "./mainView.scss";
export function MainView() {
  useEffect(() => {
    console.log("teste");
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

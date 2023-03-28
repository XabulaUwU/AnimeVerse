import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./layouts/home/home";
import Watch from "./layouts/watch/watch";
import AnimeInfo from "./layouts/anime/animeInfo";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="watch/:id" element={<Watch />} />
      <Route path="anime/:id" element={<AnimeInfo />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./layouts/home/home";
import Watch from "./layouts/watch/watch";
import AnimeInfo from "./layouts/anime/animeInfo";
import Search from "./layouts/search/search";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="watch/animes/:name/:episode" element={<Watch />} />
      <Route path="animes/:id" element={<AnimeInfo />} />
      <Route path="search/:id" element={<Search />} />
    </Routes>
  );
}

export default App;

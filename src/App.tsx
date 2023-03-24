import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./components/pages/home/home";
import Watch from "./components/pages/watch/watch";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="watch" element={<Watch />} />
    </Routes>
  );
}

export default App;

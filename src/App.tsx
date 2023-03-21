import "./app.scss";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { MainView } from "./components/main/mainView/mainView";
function App() {
  return (
    <>
      <Header />
      <MainView />
      <Footer />
    </>
  );
}

export default App;

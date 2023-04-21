import { useNavigate } from "react-router-dom";
import "./header.scss";
export function Header() {
  const navigate = useNavigate();
  const handleSubmition = (event: React.FormEvent) => {
    const input = document.getElementById("searchName") as HTMLInputElement;
    navigate(`../search/${input.value.replaceAll(" ", "-").toLowerCase()}`);
    input.value = "";
  };
  return (
    <header>
      <div id="name">Anime Verse</div>
      <div id="search">
        <form onSubmit={handleSubmition} autoComplete="off">
          <input
            autoComplete="false"
            name="hidden"
            type="text"
            id="hide"
            style={{ display: "none" }}
          />
          <input
            type="text"
            placeholder="search"
            id="searchName"
            autoComplete="off"
          />
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
    </header>
  );
}

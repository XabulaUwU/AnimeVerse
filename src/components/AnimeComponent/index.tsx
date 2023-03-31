import { Link } from "react-router-dom";
import "./animeComponent.scss";
export function EpisodeView({ title, image, id = "" }) {
  const isEpisode = (i: string) => {
    const is = i.includes("Episódio");
    return is;
  };
  return (
    <Link to={isEpisode(title) ? `/watch${id}` : `${id}`}>
      <div className={isEpisode(title) ? "recentEpisode" : "popular searched"}>
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
}

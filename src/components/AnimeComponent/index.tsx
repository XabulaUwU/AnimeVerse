import { Link } from "react-router-dom";
import "./animeComponent.scss";
export function EpisodeView({ title, image, id = "" }) {
  const isEpisode = (i: string) => {
    const is = i.includes("Episódio");
    return is;
  };
  return (
    <Link to={isEpisode(title) ? `/watch${id}` : `/anime/${id}`}>
      <div className="recentEpisode">
        <img src={image} alt={title} />
        {title}
      </div>
    </Link>
  );
}

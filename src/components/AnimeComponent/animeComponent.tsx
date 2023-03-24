import { Link } from "react-router-dom";
import "./animeComponent.scss";
export function EpisodeView({ title, image, episodeNumber = 0, id = "" }) {
  return (
    <Link to={episodeNumber ? "/watch" : `/anime/${id}`}>
      <div className="recentEpisode">
        <img src={image} alt={`${title} episode ${episodeNumber}`} />
        {episodeNumber ? (
          <p>
            {title}: Episode {episodeNumber}
          </p>
        ) : (
          <p>{title}</p>
        )}
      </div>
    </Link>
  );
}

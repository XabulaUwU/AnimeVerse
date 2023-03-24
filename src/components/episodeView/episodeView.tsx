import { Link } from "react-router-dom";
import "./episodeView.scss";
export function EpisodeView({ title, image, episodeNumber = 0 }) {
  return (
    <Link to={episodeNumber ? "/watch" : `/${title}`}>
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

import { Link } from "react-router-dom";
import "./animeComponent.scss";
export function EpisodeView({ title, image, episodeNumber = 0, id = "" }) {
  const newTitle = (i: string) => {
    const abTitle = i.slice(0, 15).concat("...");
    return abTitle;
  };
  return (
    <Link
      to={
        episodeNumber ? `/watch/${id}-episode-${episodeNumber}` : `/anime/${id}`
      }
    >
      <div className="recentEpisode">
        <img src={image} alt={`${newTitle(title)} episode ${episodeNumber}`} />
        {episodeNumber ? (
          <p>
            {newTitle(title)} Episode {episodeNumber}
          </p>
        ) : (
          <p>{newTitle(title)}</p>
        )}
      </div>
    </Link>
  );
}

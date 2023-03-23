import "./episodeView.scss";
export function EpisodeView({ title, image, episodeNumber = 0 }) {
  return (
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
  );
}

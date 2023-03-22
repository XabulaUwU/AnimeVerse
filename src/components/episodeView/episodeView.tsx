import "./episodeView.scss";
export function EpisodeView({ title, image, episodeNumber }) {
  return (
    <div className="recentEpisode">
      <img src={image} alt={`${title} image`} />
      <p>
        {title}: Episode {episodeNumber}
      </p>
    </div>
  );
}
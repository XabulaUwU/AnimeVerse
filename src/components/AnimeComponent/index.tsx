import { Link } from "react-router-dom";
import "./animeComponent.scss";
export function EpisodeView({ title, image, id = "" }) {
  const isEpisode = (i: string) => {
    const is = i.includes("Episódio");
    return is;
  };
  const hiddenElements = document.querySelectorAll('.hidden')
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show')
      }
    })
  })
  hiddenElements.forEach(el => {
    observer.observe(el)
    console.log(el)
  })
  return (
    <Link to={isEpisode(title) ? `/watch${id}` : `${id}`} state={{episodes: id}}>
      <div className={isEpisode(title) ? "recentEpisode hidden" : "popular hidden"}>
        <img src={image} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
}

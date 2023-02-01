import "../assets/styles/projects.css";
import itemImage from "../assets/itemImg.jpg";

export default function Projects() {
  return (
    <div className="projects">
      <h2>Mes projets</h2>
      <div className="project-items">
        <figure>
          <img
            className="item-img"
            src={itemImage}
            alt="Person typing on a computer"
          />
          <figcaption>Book of the Wilders</figcaption>
        </figure>
        <figure>
          <img
            className="item-img"
            src={itemImage}
            alt="Person typing on a computer"
          />
          <figcaption>Find Fuel</figcaption>
        </figure>
        <figure>
          <img
            className="item-img"
            src={itemImage}
            alt="Person typing on a computer"
          />
          <figcaption>Origins Digital</figcaption>
        </figure>
      </div>
    </div>
  );
}

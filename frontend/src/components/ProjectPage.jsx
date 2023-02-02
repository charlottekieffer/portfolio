import "../assets/styles/projectpage.css";
import itemImage from "../assets/itemImg.jpg";
import Navbar from "./Navbar";

export default function Projects() {
  return (
    <div className="project">
      <Navbar />
      <h2>Book of the Wilders</h2>
      <div className="project-card">
        <figure>
          <img
            className="card-img"
            src={itemImage}
            alt="Person typing on a computer"
          />
          <figcaption>
            Création d'un annuaire pour présenter les personnes de la promo
            2022/2023 de notre formation de développeur web et mobile.
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

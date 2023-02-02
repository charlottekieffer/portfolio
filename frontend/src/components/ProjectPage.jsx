import { useContext } from "react";
import "../assets/styles/projectpage.css";
import { useParams } from "react-router-dom";
import itemImage from "../assets/itemImg.jpg";
import Navbar from "./Navbar";
import ProjectContext from "../assets/contexts/ProjectContext";

export default function Projects() {
  const { projects } = useContext(ProjectContext);
  const { id } = useParams();
  const item = projects.find((element) => element.id === parseInt(id, 10));
  return (
    <div className="project">
      <Navbar />
      <h2>{item.title}</h2>
      <div className="project-card">
        <figure>
          <img
            className="card-img"
            src={itemImage}
            alt="Person typing on a computer"
          />
          <figcaption>{item.description}</figcaption>
        </figure>
      </div>
    </div>
  );
}

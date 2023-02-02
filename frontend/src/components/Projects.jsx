import { useContext } from "react";
import "../assets/styles/projects.css";
import { useNavigate } from "react-router-dom";
import itemImage from "../assets/itemImg.jpg";
import ProjectContext from "../assets/contexts/ProjectContext";

export default function Projects() {
  const { projects } = useContext(ProjectContext);
  const navigate = useNavigate();
  return (
    <div className="projects">
      <h2>Mes projets</h2>
      {projects.map((project) => (
        <button
          type="button"
          onClick={() => navigate(`/projects/${project.id}`)}
          className="project-items"
          key={project.id}
        >
          <figure>
            <img
              className="item-img"
              src={itemImage}
              alt="Person typing on a computer"
            />
            <figcaption>{project.title}</figcaption>
          </figure>
        </button>
      ))}
    </div>
  );
}

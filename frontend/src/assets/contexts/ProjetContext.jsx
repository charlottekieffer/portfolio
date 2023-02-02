import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const ProjectContext = createContext();

export default ProjectContext;

export function ProjectContextProvider({ children }) {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <ProjectContext.Provider value={project}>
      {children}
    </ProjectContext.Provider>
  );
}
ProjectContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

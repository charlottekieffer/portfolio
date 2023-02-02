import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";

const ProjectContext = createContext();

export default ProjectContext;

export function ProjectContextProvider({ children }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const value = useMemo(
    () => ({ projects, setProjects }),
    [projects, setProjects]
  );
  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}
ProjectContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

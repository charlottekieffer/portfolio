import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const SkillContext = createContext();

export default SkillContext;

export function SkillContextProvider({ children }) {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/skills", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setSkill(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <SkillContext.Provider value={skill}>{children}</SkillContext.Provider>
  );
}
SkillContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

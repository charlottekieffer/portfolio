import PropTypes from "prop-types";
import { createContext, useEffect, useMemo, useState } from "react";

const SkillContext = createContext();

export default SkillContext;

export function SkillContextProvider({ children }) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/skills", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const value = useMemo(() => ({ skills, setSkills }), [skills, setSkills]);
  return (
    <SkillContext.Provider value={value}>{children}</SkillContext.Provider>
  );
}
SkillContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

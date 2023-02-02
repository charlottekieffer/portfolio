import { useContext } from "react";
import "../assets/styles/presentation.css";
import SkillContext from "../assets/contexts/SkillContext";

export default function Presentation() {
  const { skills } = useContext(SkillContext);
  return (
    <div className="presentation">
      <h1>Bonjour! Je m'appelle Charlotte</h1>
      <p className="about">
        Je suis développeuse web.
        <br /> Après avoir travaillé 5 ans en tant qu'analyste fraude pour
        leboncoin, je me réoriente professionnellement pour retourner à mes
        premières amours: créer des sites web! Très bonne communicatrice,
        curieuse et passionnée, je cherche un poste de développeuse web pour une
        organisation qui a du sens et qui apporte une contribution positive à la
        société.
      </p>
      <h2>Mes compétences</h2>
      {skills.map((skill) => (
        <p className="skills" key={skill.id}>
          {skill.name}
        </p>
      ))}
    </div>
  );
}

import { skills } from "../data/skillsData";

import Skill from "./Skill";

export default function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill, i) => (
        <Skill skillObj={skill} key={i} />
      ))}
    </div>
  );
}

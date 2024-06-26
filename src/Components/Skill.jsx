export default function Skill({ skillObj: { skill, color, level } }) {
  return (
    <div style={{ backgroundColor: color }} className="skill">
      <span>{skill}</span>

      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </span>
    </div>
  );
}

export default function Skill({ skill, level, color }) {
  return (
    <div style={{ backgroundColor: color }} className="level">
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </span>
    </div>
  );
}

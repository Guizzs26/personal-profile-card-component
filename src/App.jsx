import Avatar from "./Components/Avatar";
import Intro from "./Components/Intro";
import SkillList from "./Components/SkillList";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

import { Parent } from "./Components/Props/Parent";
import { NameGame } from "./Components/State/NameGame";
import { FindNameGame } from "./Components/State/FindNameGame";
import { EventComp } from "./Components/Events/EventComp";
import { FindNameGameClass } from "./Components/Classes/FindNameGameClass";
import { FindNameGameRef } from "./Components/Refs/FindNameGameRef";

const allNames = [
  {
    name: "Arun",
    age: 24,
  },
  {
    name: "Vel",
    age: 43,
  },
];

function App() {
  return (
    <div>
      <Parent />
      <NameGame />
      <FindNameGame allNames={allNames} />
      <EventComp />
      <FindNameGameClass users={allNames} />
      <FindNameGameRef allNames={allNames} />
    </div>
  );
}

export default App;

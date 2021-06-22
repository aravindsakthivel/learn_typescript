import { Parent } from "./Components/Props/Parent";
import { NameGame } from "./Components/State/NameGame";
import { FindNameGame } from "./Components/State/FindNameGame";

function App() {
  return (
    <div>
      <Parent />
      <NameGame />
      <FindNameGame />
    </div>
  );
}

export default App;

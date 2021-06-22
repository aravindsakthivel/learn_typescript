import { useState, FC } from "react";

const NameGame: FC = () => {
  const [name, setName] = useState<string>("");
  const [allNames, setAllNames] = useState<string[]>([]);

  const clickFn = () => {
    setName("");
    setAllNames([...allNames, name]);
  };
  console.log(allNames);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={clickFn}>Click</button>
    </div>
  );
};

export { NameGame };

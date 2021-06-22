import { FC, useState } from "react";

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

const FindNameGame: FC = () => {
  const [fiName, setname] = useState<string>("");
  const [founded, setfounded] =
    useState<{ name: string; age: number } | undefined>();
  const clickable = () => {
    const findedPer = allNames.find(({ name }) => name === fiName);
    setfounded(findedPer);
  };
  return (
    <div>
      <div>Test</div>
      <input
        type="text"
        onChange={(e) => setname(e.target.value)}
        value={fiName}
      />
      <button onClick={clickable}>Find</button>
      <div>
        {founded && founded.name}
      </div>
    </div>
  );
};

export { FindNameGame };

import { FC, useState } from "react";

interface User {
  name: string;
  age: number;
}

interface FindNameGameProps {
  allNames: User[];
}

const FindNameGame: FC<FindNameGameProps> = ({ allNames }) => {
  const [fiName, setname] = useState<string>("");
  const [founded, setfounded] = useState<User | undefined>();
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
      <button onClick={clickable}>Find in Function</button>
      <div>{founded && founded.name}</div>
    </div>
  );
};

export { FindNameGame };

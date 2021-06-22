import { FC, useState, useRef, useEffect } from "react";

interface User {
  name: string;
  age: number;
}

interface FindNameGameProps {
  allNames: User[];
}

const FindNameGameRef: FC<FindNameGameProps> = ({ allNames }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fiName, setname] = useState<string>("");
  const [founded, setfounded] = useState<User | undefined>();
  const clickable = () => {
    const findedPer = allNames.find(({ name }) => name === fiName);
    setfounded(findedPer);
  };

  useEffect(() => {
    // typescript knows that the ref can be null so which is why we are not focussing when it is null
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div>Test</div>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setname(e.target.value)}
        value={fiName}
      />
      <button onClick={clickable}>Find</button>
      <div>{founded && founded.name}</div>
    </div>
  );
};

export { FindNameGameRef };

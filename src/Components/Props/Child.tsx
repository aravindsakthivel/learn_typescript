import { FC } from "react";

interface ChildProps {
  color: string;
  more?: string;
  clickable: () => void;
}

const Child = ({ color }: ChildProps) => {
  return <div>Hi i'm typescript, {color}</div>;
};

const ChildFC: FC<ChildProps> = ({ color, more = "yellow", clickable }) => {
  return (
    <div onClick={clickable}>
      Hi, I'm second child, {color}, {more}
    </div>
  );
};
/// more test

export { Child, ChildFC };
// more and mpre test
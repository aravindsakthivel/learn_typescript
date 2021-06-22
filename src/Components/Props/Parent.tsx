import { Child, ChildFC } from "./Child";

const Parent = () => {
  const clickable = () => {
    console.log("Hello");
  };
  return (
    <>
      <Child color="red" clickable={clickable} />
      <ChildFC color="grey" clickable={clickable} />
    </>
  );
};

export { Parent };

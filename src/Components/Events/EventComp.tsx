import { FC, ChangeEvent, DragEvent } from "react";

const EventComp: FC = () => {
  const onChangeFc = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  const onDragEv = (event: DragEvent<HTMLDivElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input onChange={onChangeFc} />
      <div draggable onDrag={onDragEv}>
        Drag me
      </div>
    </div>
  );
};

export { EventComp };

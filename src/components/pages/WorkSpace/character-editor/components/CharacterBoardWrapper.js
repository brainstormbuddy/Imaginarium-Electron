import * as React from "react";

export default function CharacterBoardWrapper(props) {
  const { children } = props;
  return (
    <div className="w-full flex flex-col gap-8 mt-8 px-10">{children}</div>
  );
}

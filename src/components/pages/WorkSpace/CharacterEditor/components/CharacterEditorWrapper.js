import * as React from "react";

export default function CharacterEditorWrapper(props) {
  return (
    <div className="flex-auto relative min-h-[calc(100vh-112px)] overflow-scroll bg-black">
      {props.children}
    </div>
  );
}

import * as React from "react";

export default function LocationEditorWrapper(props) {
  return (
    <div className="w-full h-[calc(100vh-112px)] p-10 overflow-auto bg-black grid grid-cols-2 gap-10">
      {props.children}
    </div>
  );
}

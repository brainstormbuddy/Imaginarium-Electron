import React, { useState } from "react";

// project context
import { ProjectContext } from "../context/ProjectContext";

// page components
import { MenuBar } from "../../components/pages/WorkSpace/MenuBar";
import ToolBar from "../../components/pages/WorkSpace/Toolbar";
import CharacterEditor from "../../components/pages/WorkSpace/CharacterEditor";
import TinyMceEditor from "../../components/pages/WorkSpace/Text/TinyMceEditor";

import "../../basicStyle.css";

export default function WorkSpace() {
  const { currentProjectType } = React.useContext(ProjectContext);

  const [state, setState] = useState({
    editorState: "<p>Hello World</p>",
    selectedContent: "",
    blockquote: "Paragraph",
    colorVal: "#FFFFFF",
    fSize: 14,
    fWeight: 16,
    lineH: 25,
    letterSpc: 1,
    align: 1,
    // Constrain: 1,
    Paragraph: false,
    pHeight: 999,
    indent: 999,
    pLeft: 999,
    pRight: 999,
    pList: 1,
    decoration: 1,
    bold: false,
    underline: false,
    strikethr: false,
    italic: false,
    pCase: 1,
    fName: "Helvetica",
  });

  return (
    <div className="flex items-stretch bg-[#0A0A0A]">
      <MenuBar />
      {currentProjectType === 1 && (
        <TinyMceEditor state={state} setState={setState} />
      )}
      {currentProjectType === 2 && <CharacterEditor />}

      {currentProjectType === 3 && <div className="flex-auto" />}
      <ToolBar state={state} setState={setState} />
    </div>
  );
}

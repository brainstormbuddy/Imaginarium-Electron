import { createContext } from "react";

export const ProjectContext = createContext({
  selected: "Recent",
  setSelected: () => {},
});

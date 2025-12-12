import { useContext } from "react";
import { ProjectContext } from "../Contexts";

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjectContext must be used in a ProjectProvider");
  }

  return context;
};

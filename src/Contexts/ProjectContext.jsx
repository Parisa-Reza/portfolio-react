import { createContext } from "react";
import { useProjects } from "../hooks";

export const ProjectContext = createContext({
  projectRepos: [],
  showLoading: false,
});

export const ProjectProvider = ({ children }) => {
  const { showLoading, projectRepos } = useProjects(); // used custom hooks
  return (
    <ProjectContext.Provider
      value={{ showLoading, projectRepos }}
    >
        {children}
    </ProjectContext.Provider>
  );
};

import { createContext } from "react";

export const ProjectContext = createContext({
    projectRepos:[],
    showLoading:false,
})
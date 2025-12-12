// import { useContext } from "react";
// import { ProjectContext } from "../Contexts/ProjectContext";
import { useProjectContext } from "../../hooks";

export function Bio() {

  const {showLoading,projectRepos}=useProjectContext();
  return (
    <div>
      <h1 className="text-4xl text-[rgb(10,228,217)]  mb-4 ">Parisa Reza</h1>
      <p className="text-lg text-white mb-6">
        Exploring Tech | Python & Javascript Programmer.</p>
      <p className="text-md text-gray-200 mb-2">Total repos :  
        {showLoading? "  Loading..." :  `  ${projectRepos.length}`}</p>
    </div>
  );
}



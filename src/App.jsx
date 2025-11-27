import { useState } from "react";

import "./App.css";
import Image from "./components/Image";
import Bio from "./components/Bio";
import SocialLink from "./components/SocialLinks";
import Projects from "./components/Projects";
import ShowProjectBtn from "./components/ShowProjectBtn";

export function App() {

  // const [showProject, setShowProject]= useState(true)
  const [showProject, setShowProject]= useState(false)


  const projectRepos = [
    {
      title: "Todo-list-CLI",
      description: "A todo list CLI project with Node.js",
      url: "https://github.com/Parisa-Reza/ToDo-List-CLI-project-with-Node.js",
    },

    {
      title: "Pawgress",
      description: "Fun Project : To-do list with vanilla JS",
      url: "https://github.com/Parisa-Reza/Pawgress",
    },

    {
      title: "Linux-tasks",
      description:
        "Linux based tasks : log filtering, file permissions and bash scripting.",
      url: "https://github.com/Parisa-Reza/linux_tasks",
    },
  ];

  return (
    <div className="flex flex-col bg-gradient-to-r from-[rgb(25,26,25)] to-[rgb(92,121,118)] gap-8 items-center justify-center h-screen">
      <div className="flex gap-4 items-center">
        <Image />
        <div className="flex flex-col ">
          <Bio />
          <SocialLink />
        </div>
      </div>
        
      {/* render my project repos using presentational props*/}
      {/* {showProject && < Projects projectRepos={projectRepos} hideProjects={()=> setShowProject(false)} />} */}
   
       {showProject ? < Projects projectRepos={projectRepos} hideProjects={()=> setShowProject(false)} />
       :<ShowProjectBtn showProjectAction={()=> setShowProject(true)}/>}
    </div>
  );
}

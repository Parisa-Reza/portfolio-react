import { useState,useEffect } from "react";
import {Image,Bio,SocialLink,ShowProjectBtn,Projects } from "../components";
import { ProjectProvider } from "../Contexts/ProjectContext";


export function HomePage() {

  //const [showProject, setShowProject]= useState(true)
  const [showProject, setShowProject]= useState(false)
  // const {showLoading,projectRepos} = useProjects(); // used custom hooks

  useEffect(()=>{
    console.log('App Component: useEffect without dependency list ')
  })

  return (

    <ProjectProvider>
    <div className="flex flex-col bg-gradient-to-r from-[rgb(25,26,25)] to-[rgb(92,121,118)] gap-8 items-center justify-center h-screen">
      <div className="flex gap-4 items-center mt-20">
        <Image />
        <div className="flex flex-col ">

          <Bio />
          <SocialLink />
        </div>
      </div>
        
      {/* render my project repos using presentational props*/}
      {/* {showProject && < Projects projectRepos={projectRepos} hideProjects={()=> setShowProject(false)} />} */}
   
       {showProject ? < Projects  hideProjects={()=> setShowProject(false)} />
       :<ShowProjectBtn showProjectAction={()=> setShowProject(true)}/>}
    </div>
    </ProjectProvider>
  );
}

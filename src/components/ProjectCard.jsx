import { useState } from "react";

function ProjectCard({ project }) {
//   let upvoteCount = 0;

const [upvoteCount,setUpvoteCount]=useState(0)

  const increaseUpvote=()=>{
   setUpvoteCount(upvoteCount+1)
  }
  return (
    <div className="card border border-gray-400 p-4 rounded shadow w-[300px]">
      <h3 className="text-xl text-white font-semibold">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
      <div className="flex mt-7 justify-between items-center">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300  font-semibold underline hover:text-[rgb(10,228,217)]"
        >
          View on GitHub
        </a>

        <button className="bg-[rgb(10,228,217)] font-semibold px-1 py-1 rounded " onClick={increaseUpvote}>{` ^  ${upvoteCount}`}</button>
      </div>
    </div>
  );
}

export default ProjectCard;

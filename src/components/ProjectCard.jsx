import { useState } from "react";

function ReactionButton ({reaction,toggleLike}){
  return (
    <button
      className={` rounded
    ${reaction === "like" ? "bg-green-200" : "bg-red-200"}`}
      onClick={toggleLike}
    >
      <span className="text-4xl">{reaction === "like" ? "▴" : "▾"}</span>
    </button>
  );
}

function ProjectCard({ project }) {


// const [upvoteCount,setUpvoteCount]=useState(0)
//   const increaseUpvote=()=>{
//    setUpvoteCount(upvoteCount+1)
//   }



const toggleLike = ()=>{
  setliked((prev)=>!prev) // toggle the previous state
}

const [liked,setliked]= useState(false);
  return (
    <div className="card border border-gray-400 p-4 rounded shadow w-[300px]">
      <h3 className="text-xl text-white font-semibold">{project.name}</h3>
      <p className="text-gray-400">{project.description}</p>
      <div className="flex mt-4 justify-between items-center">
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300  font-semibold underline hover:text-[rgb(10,228,217)]"
        >
          View on GitHub
        </a>

        {/* <button
          className="bg-[rgb(10,228,217)] font-semibold px-1 py-1 rounded "
          onClick={increaseUpvote}
        >{` ^  ${upvoteCount}`}</button> */}

         {liked ? (< ReactionButton reaction={'unlike'} toggleLike={toggleLike}/>)
         :(< ReactionButton reaction="like" toggleLike={toggleLike}/>)}


      </div>
    </div>
  );
}

export default ProjectCard;

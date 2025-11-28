import { useState,useEffect } from "react";

function ReactionButton ({reaction,toggleLike}){
  return (
    <button
      className={` rounded
    ${reaction === "like" ? "bg-green-200" : "bg-red-200"}`}
      onClick={toggleLike}
    >
      {console.log(`rendering reaction button : ${reaction}`)}
      <span className="text-4xl">{reaction === "like" ? "▴" : "▾"}</span>
    </button>
  );
}

function ProjectCard({ project }) {

// for counting the upvote
// const [upvoteCount,setUpvoteCount]=useState(0)
//   const increaseUpvote=()=>{
//    setUpvoteCount(upvoteCount+1)
//   }

const [liked,setliked]= useState(false); // boolean state

const [reactionStat,setReactionStat]= useState({ //complex state
  liked:0,
  unliked:0,
  timestamps:{
  lastLikes:null,
  lastUnlikes:null
  }
})





// for understading useEffect hook
useEffect(()=>{
    console.log('ProjectCard Component: useEffect without dependency list ')

    return(()=>{
      console.log("unmounted")
    })
  })

useEffect(()=>{
    console.log('ProjectCard Component: useEffect with empty dependency list ')
  },[])


useEffect(()=>{
    console.log('ProjectCard Component: useEffect with dependency list [liked]')
  },[liked])





// useEffect(() => {
//       console.log("ProjectCard Component: useEffect with dependency list [reactionStat] ");


// NEVER DO SUCH TYPE OF FOLLOWING MISTAKE !! THIS WILL OCCUR INFINITE LOOP !! BLUNDER BY CLOUDFARE !!
//   setReactionStat(prevStat => ({
//   ...prevStat
// }));   

// WHY THIS IS A BLUNDER??

// reactionStat changes -> useEffect runs
// useEffect runs -> setReactionStat runs
// setReactionStat runs -> reactionStat changes again
// reactionStat changes again -> useEffect runs again
// THIS WILL OCCUR INFINITE LOOP

    // }, [reactionStat]);



const toggleLike = ()=>{
  setliked((prev)=>!prev) // toggle the previous state
  const newStat = structuredClone(reactionStat);  // without structured clone, reference wont be changed so, useEffect depended on reactionStat wont be triggered
  if(!liked){
    newStat.liked+=1;
    newStat.timestamps.lastLikes= new Date();
  }else{
     newStat.unliked+=1;
    newStat.timestamps.lastUnlikes=new Date();
  }

  setReactionStat(newStat)
}

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

        {reactionStat.timestamps.lastLikes && (
          <div className="text-sm text-green-300">
            Last Liked : {" "}
            {reactionStat.timestamps.lastLikes.toLocaleString()}
          </div>
        )
        }

        {reactionStat.timestamps.lastUnlikes &&
        (
          <div className="text-sm text-red-300">
           Last Unliked : {" "}
           {reactionStat.timestamps.lastUnlikes.toLocaleString()}
          </div>
        )}

      </div>
    </div>
  );
}

export default ProjectCard;

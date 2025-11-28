import { useState,useEffect, useCallback } from "react";
import axios from 'axios';

export default function useProjects(){
const [showLoading, setShowloading]= useState(false)
  const [projectRepos,setProjectRepos]= useState([])

   const fetchingFunction= useCallback( async()=> {  // usecallback hook  caches the function  reference .
      setShowloading(true);
      try {
        const response = await axios.get(
          "https://api.github.com/users/Parisa-Reza/repos"
        );
        setProjectRepos(response.data);
      } catch (error) {
        alert("cannot fetch data", error);
      } finally {
        setShowloading(false);
      }
    },[] )



  useEffect(() => {
    // setShowloading(true)
    // axios.get("https://api.github.com/users/Parisa-Reza/repos")
    //   .then((response) => {
    //     console.log("fetching data", response.data);
    //     setProjectRepos(response.data)
    //   }).catch((error)=>{
    //     alert("cannot fetch data",error)
    //   }).finally(()=>{
    //     setShowloading(false)
    //   })
    //   // return(()=>{
    //   //   console.log('unmounting repolist from App')
    //   // }) // NOT TRIGGERING

    // async function fetchingFunction() {
    //   setShowloading(true);
    //   try {
    //     const response = await axios.get(
    //       "https://api.github.com/users/Parisa-Reza/repos"
    //     );
    //     setProjectRepos(response.data);
    //   } catch (error) {
    //     alert("cannot fetch data", error);
    //   } finally {
    //     setShowloading(false);
    //   }
    // }
    fetchingFunction();
  }, [fetchingFunction]);

  return {showLoading,projectRepos}
}
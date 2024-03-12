import React, { useEffect } from 'react'
import './cover.css'
import instance from '../instance';

function Cover({fetchUrl}) {
  console.log(fetchUrl);
/* to store data */
const [movie,setMovies]=useStTE({})
  const fetchData = async()=>{
   
    const response = await instance.get(fetchUrl)
    /* to access a particular object(movie)from an array(response.data.results) */
   /*  console.log(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]); */
    setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
   }
console.log(movie);
   useEffect(()=>{
    fetchData()
   },[])
  return (
    <div style={{height:'600px'}}>

    </div>
  )
}

export default Cover
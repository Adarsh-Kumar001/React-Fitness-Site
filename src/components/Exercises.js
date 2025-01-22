import React, {useEffect} from 'react'
import { exerciseOptions, fetchData } from '../ultilities/fetchData'
import ExerciseCard from './ExerciseCard'

import Loader from './loader'


const Exercises = ({exercises, bodyPart, setExercises }) => {
  console.log(exercises)

   useEffect(() => {
     const fetchExerciseDatas = async()=>{
      let exerciseData = [];

      if(bodyPart === 'all'){
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      }
      else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }

       
       setExercises(exerciseData);

     }

     fetchExerciseDatas();


   }, [bodyPart])
   
  
     if(!exercises.length) return < Loader />

  return (
    <div className='w-[full] bg-indigo-100 flex flex-col justify-center content-center'>
      <h1 className='w-[full] mx-auto text-3xl p-10 text-blue-600 font-bold'>Showing Results</h1>
      <div className='w-[full] flex flex-wrap justify-center'>
        {exercises.map((exercise, index) =>(
          <ExerciseCard key={index} exercise={exercise}/>
    
        ))}
      </div>
    </div>
  )
}

export default Exercises
import React from 'react'

import Loader from './loader.js'

import HorizontalScrollbar from './HorizontalScrollbar'


const SimilarExercises = ({exerciseName, targetSimilarExercisesData}) => {
  
  return (
    <div className='w-[full] bg-indigo-100'>
     <h1 className='w-[full] flex justify-center pt-10 mb-5 gap-2 text-black font-bold text-md capitalize'>Exercises Similar To <p className='text-red-600'>{exerciseName}</p></h1>
     <div className='w-[full]'>
      {targetSimilarExercisesData.length ? <HorizontalScrollbar data={targetSimilarExercisesData}/> : <Loader/>}
     </div>
    
    </div>
  )
}

export default SimilarExercises
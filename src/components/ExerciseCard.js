import React from 'react'
import {Link} from 'react-router-dom'

const ExerciseCard = ({exercise}) => {

  return (
    <Link to={`/exercise/${exercise.id}`}>
        <div className='w-[25rem] h-[32rem] m-5 p-5 bg-blue-900 text-white flex flex-col justify-center rounded-s-md hover:cursor-pointer font-semibold hover:scale-105 transition-all duration-400 max-lg:w-[20rem] max-lg:h-[27rem]'>
        <img src={exercise.gifUrl} alt={exercise.name}/>
        <div className='flex gap-5'>
        <button className='bg-red-500 w-[30%] rounded-full mt-5 hover:cursor-pointer hover:bg-red-400 flex justify-center content-center'>{exercise.bodyPart}</button>
        <button className='bg-yellow-500 w-[30%] rounded-full mt-5 hover:cursor-pointer hover:bg-yellow-400 flex justify-center content-center'>{exercise.target}</button>
        </div>
        <p className='capitalize mt-4 mb-4 mx-auto'>{exercise.name}</p>
        </div>
    </Link>
  )
}

export default ExerciseCard
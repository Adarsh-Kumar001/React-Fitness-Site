import React,{useState} from 'react'

import SearchExercises from './SearchExercises'

import Exercises from './Exercises'




const ExerciseHome = () => {

    const [bodyPart, setbodyPart] = useState('all')

    const [exercises, setExercises] = useState([])

  return (
    <div className='w-[full] bg-indigo-100'>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setbodyPart}/>
        <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </div>
  )
}

export default ExerciseHome
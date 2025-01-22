import React, {useState} from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {

  const [bodyPart, setbodyPart] = useState('all')

  const [exercises, setExercises] = useState([])


  return (
    <>
    <HeroBanner/>
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setbodyPart} />
    <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
    </>
  )
}

export default Home


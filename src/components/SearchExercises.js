import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../ultilities/fetchData'
import ExerciseCategoryList from './ExerciseCategoryList'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [bodyParts, setbodyParts] = useState([])

  

  useEffect(() => {

    const fetchExercises = async () => {
      const bodyPartDetails = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=0', exerciseOptions)
      setbodyParts(['all', ...bodyPartDetails]) //The ...bodyPartDetails syntax takes all the elements of the bodyPartList array and spreads them into the new array. so all bodypartdetails comes along with an extra element that is 'all'.

    }

    fetchExercises();

  }, [])
 


  const [search, setSearch] = useState('')

  

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      console.log(searchedExercises)

      setSearch(''); //to clear the searched box
      setExercises(searchedExercises);

      window.scrollTo({top:1200, left:100, behavior:'smooth'})


    }


  }

  return (
    <div className='w-[full] bg-blue-500 flex flex-col justify-center content-center'>
      <h2 className='mx-auto text-3xl p-10 text-white font-bold max-lg:text-2xl'>Some Exercises You Should Know!</h2>
      <div className='flex mx-auto gap-5 pb-10'>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search For Exercises...' className='w-[20rem] h-[2rem] rounded-sm pl-2 border-2 max-lg:w-[15rem]' />
        <button onClick={handleSearch} className='searchButton bg-red-500 text-white w-[5rem] h-[2rem] m-auto rounded-sm flex justify-center content-center transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-black'>Search</button>
      </div>

      <div className='mx-auto text-3xl pb-10 pt-4 text-white font-bold max-lg:text-2xl'>OR SORT BY CATEGORIES</div>

      <ExerciseCategoryList data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

    </div>

  )
}


export default SearchExercises



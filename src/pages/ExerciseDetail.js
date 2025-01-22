import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import {exerciseOptions, fetchData, youtubeOptions} from '../ultilities/fetchData'

import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const {id} = useParams();

  const [exerciseVideos, setexerciseVideos] = useState({});

  const [targetSimilarExercisesData, settargetSimilarExercisesData] = useState({})


  useEffect(() => {
    
    const fetchExerData = async () => {
       const exerciseDBurl = 'https://exercisedb.p.rapidapi.com';
       const youtubeSearchDownloadApirul = 'https://youtube-search-and-download.p.rapidapi.com';

       const exerciseDetailsdata = await fetchData(`${exerciseDBurl}/exercises/exercise/${id}`, exerciseOptions);
       setexerciseDetail(exerciseDetailsdata);
   
       const exerciseVideosData = await fetchData(`${youtubeSearchDownloadApirul}/search?query=${exerciseDetailsdata.name}`, youtubeOptions)
       setexerciseVideos(exerciseVideosData.contents);
      
       const targetMuscleExercisesData = await fetchData(`${exerciseDBurl}/exercises/target/${exerciseDetailsdata.target}`, exerciseOptions);
       settargetSimilarExercisesData(targetMuscleExercisesData)

  
      }
 
    fetchExerData();
    
  }, [id]);
  

  return (
    <div>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideo exerciseName={exerciseDetail.name} exerciseVideos={exerciseVideos}/>
      <SimilarExercises exerciseName={exerciseDetail.name} targetSimilarExercisesData={targetSimilarExercisesData} />
    </div>
  )
}

export default ExerciseDetail
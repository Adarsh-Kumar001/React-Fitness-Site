import React from 'react'

import playIcon from '../assets/images/play-icon.jpg'
import Loader from './loader'


const ExerciseVideo = ({ exerciseName, exerciseVideos }) => {

  if (!exerciseVideos?.length) return <Loader />;

  return (
    <div className='w-[full] bg-blue-500'>
      <h1 className='w-[full] flex justify-center pt-10 mb-5 gap-2 text-yellow-300 font-bold text-3xl capitalize max-lg:text-sm'><p className='text-white'>Some Videos Realted To </p>{exerciseName}</h1>
      <div className='w-[full] flex flex-wrap justify-center pb-10'>

        {exerciseVideos?.slice(0, 3).map((item, index) => (

          <a 
          key={index} 
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`} 
          target='_blank' 
          rel='noreferrer'
          className='w-[26rem] h-[14rem] m-5'
          >
            <img className='w-[30rem] m-5 shadow-gray-600 shadow-xl max-lg:w-[20rem]' src={item.video.thumbnails[0].url} alt={item.video.title} /> 
            <img className='w-20 relative bottom-[9.5rem] left-[9.5rem]' src={playIcon} alt='yt-logo'/>
          </a>
        ))}

      </div>
    </div>
  )
}

export default ExerciseVideo
import React from 'react'

import bodyPartImg from '../assets/icons/body-part.png'
import targetImg from '../assets/icons/target.png'
import equipmentImg from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {

  return (
    <div className='w-[full] text-white bg-blue-500 flex flex-col capitalize'>

      <div className='flex gap-5 max-lg:flex-col'>
      <img className='w-[100rem] max-lg:w-[full]' src={exerciseDetail.gifUrl} alt='gif'/>
      <div className='flex flex-col justify-center'>

        <h1 className='font-bold ml-2 text-3xl mb-2 max-lg:flex max-lg:justify-center'>{exerciseDetail.name}</h1>
        <p className='mr-3 pr-3 ml-2 max-lg:p-2'>{exerciseDetail.instructions}</p>

        <div className='flex gap-5 mt-5 ml-2 max-lg:flex-col max-lg:p-2'>

        <div className='flex gap-2'>
          <img className='w-15 bg-white p-1 rounded-full' src={bodyPartImg} alt='body part'/>
          <h6 className='my-auto font-semibold text-red-200'>{exerciseDetail.bodyPart}</h6>
        </div>

        <div className='flex gap-2'>
          <img className='w-15 bg-white p-1 rounded-full' src={equipmentImg} alt='equipment'/>
          <h6 className='my-auto font-semibold text-green-200'>{exerciseDetail.equipment}</h6>
        </div>

        <div className='flex gap-2'>
          <img className='w-15 bg-white p-1 rounded-full' src={targetImg} alt='target'/>
          <h6 className='my-auto font-semibold text-orange-200'>{exerciseDetail.target}</h6>
        </div>

        </div>
    

      </div>
      </div>
      

    </div>
  )
}

export default Detail
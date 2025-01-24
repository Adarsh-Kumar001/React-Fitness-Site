import React from 'react'
import bodyPartImage from '../assets/icons/body-part.png'

const BodyPart = ({item, bodyPart , setBodyPart}) => {
  return (
    <>
    <div onClick={()=>{

       setBodyPart(item);
       window.scrollTo({top:1000, left:100, behavior:'smooth'})

    }} className='w-44 m-10 hover:scale-110 bg-blue-800 hover:cursor-pointer hover:border-black border-[5px] p-3 flex flex-col justify-center content-center transition-all duration-200 max-lg:w-36 max-lg:m-2'>
    <img src={bodyPartImage} alt='body part'/>
    <div className='uppercase m-auto font-semibold text-white'>{item}</div>
    </div>
     </>
  )
}

export default BodyPart
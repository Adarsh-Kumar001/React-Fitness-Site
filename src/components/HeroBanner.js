import React from 'react'
import Banner from '../assets/images/banner.png'
import { Link } from 'react-router'

const HeroBanner = () => {
  return (
  <>
    <div className='flex max-lg:flex-col'>
      <div className='w-[30%] pt-40 flex flex-col gap-1 pl-10 bg-indigo-100 max-lg:w-[100%] max-lg:pb-10'>
        <h1 className='text-4xl font-bold text-blue-600 max-lg:m-auto'>FITNESS SITE</h1>
        <p className='text-xl font-semibold text-red-600 max-lg:m-auto'>GET STARTED NOW!!</p>
        <Link className='mt-5 w-[8rem] h-[3rem] bg-blue-500 flex rounded-sm transition-transform duration-300 hover:border-black hover:border-2 hover:bg-white hover:text-black text-white font-semibold max-lg:m-auto' to="/exercise/"><p className='m-auto'>CHECK OUT</p></Link>
      </div>
      <img className='h-[90vh] w-[70%] m-0 p-0 max-lg:w-[100%] max-lg:h-[50%]' src={Banner} alt='banner'/>
    </div>
    </>
  )
}

export default HeroBanner

import React from 'react'

import GymLogo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <div className='w-[full] bg-blue-500 flex justify-center gap-5 content-center p-5'>
      <img className='w-20' src={GymLogo} alt='Gym-logo'/>
      <h1 className='my-auto font-bold'>Ftiness Site &copy; 2025</h1>
    </div>
  )
}

export default Footer
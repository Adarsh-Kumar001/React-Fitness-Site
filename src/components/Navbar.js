import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-[full] h-[10vh] bg-blue-500 flex justify-between pr-5 pl-5'>
            <Link className='my-auto' to="/">
                <img className='w-14' src={Logo} alt='logo' />
            </Link>

            <div className='flex gap-10 font-semibold text-white pr-20 text-xl'>
                <Link className='m-auto transition-transform duration-300 hover:scale-110' to="/">Home</Link>
                <Link className='m-auto transition-transform duration-300 hover:scale-110' to="/exercise/">Exercises</Link>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-100 w-full h-20 flex items-center justify-between px-40 bg-slate-100 drop-shadow-lg">
        <div >
            <h1 className='text-3xl font-bold'>
                <Link to="/">
                    Bayava Yoga
                </Link>
            </h1>
        </div>
        <div>
            <ul className='flex items-center justify-between gap-5'>
                <li>
                    <Link to="/schedule">
                        Schedule
                    </Link>
                </li>
                <li>
                    <Link to="/courses">
                        Courses
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        </div>
        <div className='flex items-center justify-between gap-5'>
            <button className='bg-yellow-500 text-white px-5 py-2 rounded-md'>
                <Link to="/">
                    Get Started
                </Link>
            </button>
            <select className='bg-gray-100 border px-5 py-2 rounded-md focus:ring-0'>
                <option>English</option>
                <option>Hindi</option>
                <option>Russian</option>
            </select>
        </div>
    </nav>
  )
}

export default Navbar
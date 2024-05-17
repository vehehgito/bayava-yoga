import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import OurTeachers from '../Components/OurTeachers/OurTeachers'
import AboutAcademy from '../Components/AboutAcademy/AboutAcademy'
import Schedule from '../Components/Schedule/Schedule'
import Courses from '../Components/Courses/Courses'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import Footer from '../Components/Footer/Footer'
import CoursePage from '../Components/Courses/CoursePage/CoursePage'

function Router() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/our-teachers' element={<OurTeachers />} />
            <Route path='/about-academy' element={<AboutAcademy />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/courses/:courseId' element={<CoursePage />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Router
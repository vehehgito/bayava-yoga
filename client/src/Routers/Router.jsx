import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import OurTeachers from '../Components/OurTeachers/OurTeachers'
import TeacherPage from '../Components/OurTeachers/TeacherPage/TeacherPage'
import AboutAcademy from '../Components/AboutAcademy/AboutAcademy'
import Schedule from '../Components/Schedule/Schedule'
import Courses from '../Components/Courses/Courses'
import CoursePage from '../Components/Courses/CoursePage/CoursePage'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import Footer from '../Components/Footer/Footer'
import EducationPrograms from '../Components/EducationPrograms/EducationPrograms'

function Router() {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/educational-programs' element={<EducationPrograms />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/our-teachers' element={<OurTeachers />} />
            <Route path='/about-academy' element={<AboutAcademy />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/courses/:courseId' element={<CoursePage />} />
            <Route path='/teachers/:teacherId' element={<TeacherPage />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Router
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CoursePage() {

    const [course, setCourse] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/get/${courseId}`)
        .then(res => {
            setCourse(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    , [courseId])

    const { courseId } = useParams()
    // const course = 


  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>

        <div>

        </div>

        
    </div>
  )
}

export default CoursePage
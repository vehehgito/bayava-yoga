import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CoursePage() {
	const [course, setCourse] = useState(null);

    const { courseId } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/courses/${courseId}`)
			.then((res) => {
				setCourse(res.data.rows[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [courseId]);

	// const course =

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<div>
				{course ? (
					<div>
						<h1>{course.name}</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Expedita maxime saepe amet et odio consectetur
							atque, nobis quisquam alias harum cupiditate porro
							fugit veritatis illum iste aspernatur dolore
							reiciendis molestiae? 
						</p>
						<img src={course.cover_photo__c} alt={course.name} />
					</div>
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	);
}

export default CoursePage;

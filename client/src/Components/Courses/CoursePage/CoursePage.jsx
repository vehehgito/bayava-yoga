import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CoursePage() {
	const [course, setCourse] = useState(null);

    const { courseId } = useParams();

	useEffect(() => {
		axios
			.get(`/api/courses/${courseId}`)
			.then((res) => {
				setCourse(res.data.rows[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [courseId]);

	return (
			<div className="pt-40">
				{course ? (
					<div className="flex flex-wrap p-10">
						<h1 className="text-black font-bold text-7xl drop-shadow">
							{course.name}
						</h1>
						<p className="text-xl">
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
	);
}

export default CoursePage;

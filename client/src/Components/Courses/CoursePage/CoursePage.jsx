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
			<div className="p-10 pt-40 flex flex-wrap justify-center text-center content-center items-center">
				{course ? (
					<div className="">
						<h1 className="pb-5 text-black font-crimson text-6xl drop-shadow">
							{course.name}
						</h1>
						<h2 className="pb-5 text-black font-crimnson text-3xl drop-shadow">
						Category: {course.category__c}
						</h2>
						<p className="pb-5 text-black font-open-sans text-xl">
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

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TeacherPage() {
    const [teacher, setTeacher] = useState(null);

    const { teacherId } = useParams();

	useEffect(() => {
		axios
			.get(`/api/teachers/${teacherId}`)
			.then((res) => {
				setTeacher(res.data.rows[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [teacherId]);

    return(
		<div className="min-h-screen flex flex-col items-center justify-center">
			<div>
				{teacher ? (
					<div>
						<h1>{teacher.name}</h1>
						<p>
							{teacher.Long_About__c}
						</p>
						<img src={teacher.cover_photo__c} alt={teacher.name} />
					</div>
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
    )
}

export default TeacherPage
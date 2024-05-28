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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div>
        {teacher ? (
          <div className="flex justify-center items-center">
			<div>
				<img
				src={teacher.cover_photo__c}
				className="w-[20em] h-[20em] object-cover object-center rounded-full mx-[3em]"
				alt={teacher.name}
				/>
			</div>
            <div className="flex flex-col w-[50%]">
				<h1>Name: {teacher.name}</h1>
				<p>Age: {teacher.age__c}</p>
				<p>Description: {teacher.long_About__c}</p>
				<p>Short Description: {teacher.short_description__c}</p>
				<p>Speciality: {teacher.speciality__c}</p>
				<p>Type: {teacher.type__c}</p>
			</div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default TeacherPage;

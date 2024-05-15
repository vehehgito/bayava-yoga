import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallBrownOutlineButton from "../Reusables/SmallBrownOutlineButton";

function Courses() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/get")
			.then((res) => {
				setData(res.data.rows);
			})
			.catch((error) => console.error(error));
	}, []);

	// "fields": [
	// 	"mode__c",
	// 	"teacher__c",
	// 	"category__c",
	// 	"teacher__r__teacher_unique_id__c",
	// 	"name",
	// 	"duration__c",
	// 	"isdeleted",
	// 	"systemmodstamp",
	// 	"end_date__c",
	// 	"createddate",
	// 	"start_date__c",
	// 	"cover_photo__c",
	// 	"price__c",
	// 	"course_unique_id__c",
	// 	"sfid",
	// 	"id",
	// 	"_hc_lastop",
	// 	"_hc_err"
	// ],

	return (
		<div className="min-h-screen flex flex-col justify-between items-center py-20">
			<div className="bg-smoke-brown w-full flex flex-col items-center justify-center text-soft-gray p-20">
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase">
					Yoga Courses
				</h1>
				<p className="w-1/2 text-center">
					Our courses are designed to help you learn and grow. Our
					instructors are experienced professionals in their fields.
				</p>
			</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 items-center justify-center md:p-16 p-1 gap-5">
				{data.map((course) => {
					return (
						<div key={course.id}>
							<div className="max-w-sm rounded overflow-hidden shadow-lg backdrop-blur-lg bg-smoke-yellow text-smoke-brown">
								<img
									className="object-cover h-48 w-96"
									src={course.cover_photo__c}
								/>
								<div className="px-6 py-4">
									<div className="flex justify-between items-center gap-3">
										<div className="font-bold text-2xl mb-2 font-crimson-pro">
											{course.name}
										</div>
										<div className="text-gray-700 text-base">
											Instructor :{" "}
											<span className="font-semibold font-open-sans">
												{
													course.teacher__r__teacher_unique_id__c
												}
											</span>
										</div>
									</div>
									<div className="flex justify-between items-center gap-3">
										<p>Starts : {course.start_date__c}</p>
										<p>Ends : {course.end_date__c}</p>
									</div>
								</div>
								<div className="px-6 py-4 flex items-center justify-between">
									<h3 className="text-2xl text-gray-700 font-black">
										{course.mode__c}
									</h3>
									<SmallBrownOutlineButton text="Enroll" />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Courses;

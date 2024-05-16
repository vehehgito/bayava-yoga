import React, { useEffect, useState } from "react";
import axios from "axios";
import SmallBrownOutlineButton from "../Reusables/SmallBrownOutlineButton";
import { Link } from "react-router-dom";

function OurTeachers() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/teachers")
			.then((res) => {
				setData(res.data.rows);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="min-h-screen w-full flex items-center justify-between py-20 gap-10 flex-col">
			<div className="bg-smoke-brown w-full flex flex-col items-center justify-center text-soft-gray p-20">
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase">
					Our Teachers
				</h1>
				<p className="w-1/2 text-center">
					Our teachers are experienced professionals in their fields.
					They are dedicated to helping you learn and grow.
				</p>
			</div>
			<div className="flex items-center justify-center w-full px-20">
				<form className="flex items-center justify-center">
					<input
						type="text"
						placeholder="Search for a teacher"
						className="md:p-5 p-2 rounded-l-md bg-smoke-yellow outline-none text-smoke-brown"
					/>
					<button className="bg-smoke-brown text-white md:p-5 p-2 rounded-r-md">
						Search
					</button>
				</form>
			</div>
			<div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
				{data.map((teacher) => {
					return (
						<div
							key={teacher.id}
							className="flex flex-col items-center justify-center gap-3"
						>
							<img
								src={teacher.cover_photo__c}
								alt={teacher.name}
								className="rounded-full md:w-48 md:h-48 w-28 h-28 aspect-square object-cover"
							/>
							<h2 className="md:text-3xl text-xl font-crimson-pro">
								{teacher.name}
							</h2>
							<h2 className="md:text-xl text-sm bg-smoke-brown flex items-center justify-center text-white rounded-md px-2">
								{}
							</h2>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default OurTeachers;

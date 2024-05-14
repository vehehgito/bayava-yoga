import React from "react";
import { Link } from "react-router-dom";
import BrownButton from "../Reusables/BrownButton";

function Teachers() {
	const teachers = [
		{
			id: 1,
			name: "Teacher 1",
			image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
		},
		{
			id: 2,
			name: "Teacher 2",
			image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBmYWNlfGVufDB8fDB8fHww",
		},
		{
			id: 3,
			name: "Teacher 3",
			image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGZhY2V8ZW58MHwxfDB8fHww",
		},
		{
			id: 4,
			name: "Teacher 4",
			image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGZhY2V8ZW58MHwxfDB8fHww",
		},
		{
			id: 5,
			name: "Teacher 5",
			image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGZhY2V8ZW58MHwxfDB8fHww",
		},
		{
			id: 6,
			name: "Teacher 6",
			image: "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMGZhY2V8ZW58MHwxfDB8fHww",
		},
		{
			id: 7,
			name: "Teacher 7",
			image: "https://images.unsplash.com/photo-1542458579-bc6f69b5ce6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBmYWNlfGVufDB8MXwwfHx8MA%3D%3D",
		},
		{
			id: 8,
			name: "Teacher 8",
			image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBmYWNlfGVufDB8MXwwfHx8MA%3D%3D",
		},
	];

	return (
		<div className="min-h-1/2 w-full flex items-center justify-between bg-smoke-yellow py-20 md:px-40 px-0 gap-5 md:flex-row flex-col">
			<div className="flex flex-col gap-10 md:p-0 p-4 md:text-left text-center">
				<h1 className="min-[933px]:text-6xl text-4xl font-bold">
					<div className="min-[933px]:text-2xl text-xl">
            Learn from
          </div>
          <span className="uppercase">
            the best
          </span>
				</h1>
				<p>
					Our teachers are experienced professionals in their fields.
					They are dedicated to helping you learn and grow.
				</p>
				<div className="">
					<Link to="/our-teachers" className="text-smoke-yellow">
            <BrownButton text="Meet Our Teachers" />
					</Link>
				</div>
			</div>
			<div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
				{teachers.map((teacher) => {
					return (
						<div
							key={teacher.id}
							className="flex flex-col items-center justify-center gap-3"
						>
							<img
								src={teacher.image}
								alt={teacher.name}
								className="rounded-full md:w-38 md:h-38 w-28 h-28 aspect-square object-cover"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Teachers;

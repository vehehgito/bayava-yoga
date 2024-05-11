import React from "react";
import { Link } from "react-router-dom";

function OurTeam() {
	const teachers = [
		{
			id: 1,
      name: "John Doe",
      specialisation: "Yoga Instructor",
			image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
		},
		{
			id: 2,
      name: "Will Smith",
      specialisation: "Fitness Instructor",
			image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBmYWNlfGVufDB8fDB8fHww",
		},
		{
			id: 3,
			name: "Carl Johnson",
      specialisation: "Ayurveda Specialist",
			image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGZhY2V8ZW58MHwxfDB8fHww",
		},
		{
			id: 4,
			name: "Jane Doe",
      specialisation: "Nutritionist",
			image: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGZhY2V8ZW58MHwxfDB8fHww",
		},
		{
			id: 5,
			name: "Jessica Moreno",
      specialisation: "Yoga Instructor",
			image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGZhY2V8ZW58MHwxfDB8fHww",
		},
		{
			id: 6,
			name: "Tyler Durden",
      specialisation: "Fitness Instructor",
			image: "https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMGZhY2V8ZW58MHwxfDB8fHww",
		},
		{
			id: 7,
			name: "Karen Smith",
      specialisation: "Nutritionist",
			image: "https://images.unsplash.com/photo-1542458579-bc6f69b5ce6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBmYWNlfGVufDB8MXwwfHx8MA%3D%3D",
		},
		{
			id: 8,
			name: "Alfredo Garcia",
      specialisation: "Ayurveda Specialist",
			image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBmYWNlfGVufDB8MXwwfHx8MA%3D%3D",
		},
		{
			id: 8,
			name: "Gina Linetti",
      specialisation: "Yoga Instructor",
			image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBmYWNlfGVufDB8MXwwfHx8MA%3D%3D",
		},
		{
			id: 8,
			name: "Gina Linetti",
      specialisation: "Yoga Instructor",
			image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBmYWNlfGVufDB8MXwwfHx8MA%3D%3D",
		},
		{
			id: 8,
			name: "Gina Linetti",
      specialisation: "Yoga Instructor",
			image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBmYWNlfGVufDB8MXwwfHx8MA%3D%3D",
		},
		{
			id: 8,
			name: "Gina Linetti",
      specialisation: "Yoga Instructor",
			image: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBmYWNlfGVufDB8MXwwfHx8MA%3D%3D",
		},
	];

	return (
		<div className="min-h-screen w-full flex items-center justify-between py-20 gap-10 flex-col">
			<div className="bg-smoke-brown w-full flex flex-col items-center justify-center text-soft-gray p-20">
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase">
					Our Team
				</h1>
        <p className="w-1/2 text-center">
          Our teachers are experienced professionals in their fields. They are dedicated to helping you learn and grow.
        </p>
			</div>
      <div className="flex items-center justify-center w-full px-20">
        <form className="flex items-center justify-center">
          <input type="text" placeholder="Search for a teacher" className="md:p-5 p-2 rounded-l-md bg-smoke-yellow outline-none text-smoke-brown" />
          <button className="bg-smoke-brown text-white md:p-5 p-2 rounded-r-md">Search</button>
        </form>
      </div>
			<div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-5'>
        {
          teachers.map((teacher) => {
            return (
              <div key={teacher.id} className='flex flex-col items-center justify-center gap-3'>
                <img src={teacher.image} alt={teacher.name} className='rounded-full md:w-48 md:h-48 w-28 h-28 aspect-square object-cover' />
                <h2 className="md:text-3xl text-xl font-crimson-pro">
                  {teacher.name}
                </h2>
                <h2 className='md:text-xl text-sm bg-smoke-brown flex items-center justify-center text-white rounded-md px-2'>
                  {}
                </h2>
              </div>
            )
          })
        }
      </div>
		</div>
	);
}

export default OurTeam;

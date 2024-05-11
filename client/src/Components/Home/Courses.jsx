import React from "react";
import SmallBrownOutlineButton from "../Reusables/SmallBrownOutlineButton";
import BrownButton from "../Reusables/BrownButton";

function Courses() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-between py-44 md:gap-0 gap-5">
			<div>
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase text-center">
					Our Upcoming Courses
				</h1>
			</div>
			<div className="grid grid-cols-1 gap-10 min-[933px]:grid-cols-3 px-10">
				<div className="bg-smoke-yellow p-10 rounded-lg flex flex-col gap-5">
					<h2 className="text-2xl font-bold">Course 1</h2>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus et odio at purus.
					</p>
          <div className="flex justify-end">
            <SmallBrownOutlineButton text="Learn More" />
          </div>
				</div>
				<div className="bg-smoke-yellow p-10 rounded-lg flex flex-col gap-5">
					<h2 className="text-2xl font-bold">Course 2</h2>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus et odio at purus.
					</p>
          <div className="flex justify-end">
            <SmallBrownOutlineButton text="Learn More" />
          </div>
				</div>
				<div className="bg-smoke-yellow p-10 rounded-lg flex flex-col gap-5">
					<h2 className="text-2xl font-bold">Course 3</h2>
					<p className="text-gray-500">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus et odio at purus.
					</p>
          <div className="flex justify-end">
            <SmallBrownOutlineButton text="Learn More" />
          </div>
				</div>
			</div>
      <div>
        <BrownButton text="View All Courses" />
      </div>
		</div>
	);
}

export default Courses;

import React from "react";
import SmallYellowOutlineButton from "../Reusables/SmallYellowOutlineButton";

function OurPrograms() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-between bg-smoke-yellow py-40">
			<div>
				<h1 className="min-[933px]:text-7xl text-4xl pb-10 font-bold uppercase">
					Our Programs
				</h1>
			</div>
			<div className="grid md:grid-cols-3 gap-8 px-10">
				<div className="flex flex-col items-center justify-center gap-5 p-5 bg-smoke-brown text-smoke-yellow rounded-tl-xl border-r border-b drop-shadow-md rounded-xl">
					<h1 className="text-4xl font-semibold">Yoga Sadhaka</h1>
					<h2 className="text-6xl font-bold">$5</h2>
					<p className="text-xl w-1/2 text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
					<SmallYellowOutlineButton text="Join Now"/>
				</div>
				<div className="flex flex-col items-center justify-center gap-5 p-5 bg-smoke-brown text-smoke-yellow rounded-tl-xl border-r border-b drop-shadow-md rounded-xl">
					<h1 className="text-4xl font-semibold">Yoga Shikshaka</h1>
					<h2 className="text-6xl font-bold">$10</h2>
                    {/* <h3 className="text-2xl font-semibold font-mono">/ month</h3> */}
					<p className="text-xl w-1/2 text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
					<SmallYellowOutlineButton text="Join Now"/>
				</div>
				<div className="flex flex-col items-center justify-center gap-5 p-5 bg-smoke-brown text-smoke-yellow rounded-tl-xl border-r border-b drop-shadow-md rounded-xl">
					<h1 className="text-4xl font-semibold">Yoga Chiktshak</h1>
					<h2 className="text-6xl font-bold">$30</h2>
                    {/* <h3 className="text-2xl font-semibold font-mono">/ month</h3> */}
					<p className="text-xl w-1/2 text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
					<SmallYellowOutlineButton text="Join Now"/>
				</div>
			</div>
		</div>
	);
}

export default OurPrograms;

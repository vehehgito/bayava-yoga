import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import ResponsiveBenefits from "./ResponsiveBenefits";

function Home() {
	return (
		<div className="">
			{/* <h1 className="text-6xl">Home</h1> */}
			<div>
				<Hero />
			</div>
			<div className="max-[933px]:hidden flex">
				<Benefits />
			</div>
			<div className="min-[933px]:hidden flex">
				<ResponsiveBenefits />
			</div>
		</div>
	);
}

export default Home;

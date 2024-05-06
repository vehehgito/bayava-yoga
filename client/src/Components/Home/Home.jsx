import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";

function Home() {
	return (
		<div className="">
			{/* <h1 className="text-6xl">Home</h1> */}
			<div>
				<Hero />
			</div>
			<div>
				<Benefits />
			</div>
		</div>
	);
}

export default Home;

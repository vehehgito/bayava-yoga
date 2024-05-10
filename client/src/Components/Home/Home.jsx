import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import ResponsiveBenefits from "./ResponsiveBenefits";
import Features from "./Features"
import HowItWorks from "./HowItWorks";
import CallToAction from "./CallToAction";
import NewsLetter from "./NewsLetter";
import OurServices from "./OurServices";
import Statistics from "./Statistics";
import Reviews from "./Reviews";

function Home() {
	return (
		<div className="">
			<div>
				<Hero />
			</div>
			<div>
				<Features />
			</div>
			<div className="max-[933px]:hidden flex">
				<Benefits />
			</div>
			<div className="min-[933px]:hidden flex">
				<ResponsiveBenefits />
			</div>
			<div>
				<HowItWorks />
			</div>
			<div>
				<OurServices />
			</div>
			<div>
				<Statistics />
			</div>
			<div>
				<Reviews />
			</div>
			<div>
				<CallToAction />
			</div>
			<div>
				<NewsLetter />
			</div>
		</div>
	);
}

export default Home;

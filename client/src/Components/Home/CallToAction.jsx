import React from "react";
import YellowOutlineButton from "../Reusables/YellowOutlineButton";

function CallToAction() {
	return (
			<div className="min-h-1/2 bg-smoke-brown flex items-center justify-center w-full min-[933px]:flex-row-reverse flex-col-reverse px-10 py-20 gap-10">
				<div className="w-full flex items-center justify-center">
					<YellowOutlineButton text="Get Started Today" />
				</div>
				<div className="h-full w-full flex items-center justify-center flex-col gap-5">
					<h1 className="w-full sm:text-4xl md:text-6xl text-xl font-bold flex flex-col justify-center md:text-left text-center text-white">
						<div className="sm:text-2xl md:text-3xl text-xl text-smoke-yellow">
							Start your
						</div>
						<span className="uppercase">
							Yoga journey today!
						</span>
					</h1>
				</div>
			</div>
	);
}

export default CallToAction;

import React from "react";
import OutlineButton from "../Reusables/OutlineButton";

function CallToAction() {
	return (
			<div className="min-h-1/2 bg-yellow flex items-center justify-center w-full min-[933px]:flex-row-reverse flex-col-reverse px-10 py-20 gap-10">
				<div className="w-full flex items-center justify-center">
					<OutlineButton text="Get Started Today" />
				</div>
				<div className="h-full w-full flex items-center justify-center flex-col gap-5">
					<h1 className="w-full sm:text-6xl min-[933px]:text-3xl text-[2rem] font-bold flex flex-col justify-center md:text-left text-center">
						<div className="sm:text-4xl min-[933px]:text-xl text-[1.5rem] text-gray">
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

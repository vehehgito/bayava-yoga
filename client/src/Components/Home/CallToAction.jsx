import React from "react";
import OutlineButton from "../Reusables/OutlineButton";

function CallToAction() {
	return (
		<div className="min-h-1/2 bg-yellow flex items-center justify-center w-full min-[933px]:flex-row-reverse flex-col-reverse">
			<div className="w-1/2 flex items-center justify-center">
				<OutlineButton text="Get Started Today" />
			</div>
			<div className="h-full w-1/2 p-20 text-right">
				<h1 className="text-6xl font-bold text-center uppercase">
					Start your journey today!
				</h1>
				<p className="text-center">
					Start your free trial today. No credit card required.
				</p>
			</div>
		</div>
	);
}

export default CallToAction;

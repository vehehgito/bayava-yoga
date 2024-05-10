import React from "react";
import OutlineButton from "../Reusables/OutlineButton";

function NewsLetter() {
	return (
		<div className="min-h-1/2 bg-peach flex items-center justify-center w-full min-[933px]:flex-row flex-col-reverse px-10 py-20 gap-10">
			<div className="h-full w-full md:p-20 p-2 rounded-r-md drop-shadow-md">
				<form className="w-full font-crimson-pro flex items-center justify-center text-2xl">
					<input
						type="email"
						placeholder="Enter your email address"
						className="p-5 rounded-l-md"
					/>
					<button className="bg-light-blue text-yellow p-5 rounded-r-md">
						Subscribe
					</button>
				</form>
			</div>
			<div className="h-full w-full text-right flex flex-col">
				<h1 className="w-full sm:text-6xl min-[933px]:text-3xl text-[2rem] font-bold flex flex-col justify-center md:text-right text-center">
					<div className="sm:text-4xl min-[933px]:text-xl text-[1.5rem] text-light-blue">
						Subscribe{` `}
					</div>
					<span className="uppercase">
						to our Newsletter
					</span>
				</h1>
			</div>
		</div>
	);
}

export default NewsLetter;

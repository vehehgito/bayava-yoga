import React from "react";
import OutlineButton from "../Reusables/OutlineButton";

function NewsLetter() {
	return (
		<div className="min-h-1/2 bg-light-yellow flex min-[933px]:flex-row flex-col-reverse items-center justify-center w-full">
			<div className="h-full w-1/2 p-20 rounded-r-md drop-shadow-md">
				<form className="w-full font-crimson-pro flex items-center justify-center">
					<input
						type="email"
						placeholder="Enter your email address"
						className="p-2 rounded-l-md"
					/>
					<button className="bg-light-blue text-yellow p-2 rounded-r-md">
						Subscribe
					</button>
				</form>
			</div>
			<div className="h-full w-1/2 p-20 text-right flex flex-col items-center justify-center">
				<h1 className="text-6xl font-bold text-center uppercase">
					Subscribe to our Newsletter
				</h1>
				<p>Get the latest news and updates from us.</p>
			</div>
		</div>
	);
}

export default NewsLetter;

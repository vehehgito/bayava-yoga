import React from "react";

function NewsLetter() {
	return (
		<div className="min-h-1/2 bg-smoke-yellow flex items-center justify-center w-full min-[933px]:flex-row flex-col-reverse px-10 py-20 gap-10">
			<div className="h-full w-full md:p-20 p-2 rounded-r-md drop-shadow-md">
				<form className="w-full font-crimson-pro flex items-center justify-center text-2xl">
					<input
						type="email"
						placeholder="Enter your email address"
						className="md:p-5 p-2 rounded-l-md"
					/>
					<button className="bg-smoke-brown text-smoke-yellow md:p-5 p-2 rounded-r-md">
						Subscribe
					</button>
				</form>
			</div>
			<div className="h-full w-full text-right flex flex-col">
				<h1 className="w-full sm:text-4xl md:text-6xl text-xl font-bold flex flex-col justify-center md:text-right text-center text-smoke-brown">
					<div className="sm:text-2xl md:text-3xl text-xl text-mid-gray">
						Subscribe to our{` `}
					</div>
					<span className="uppercase">
						Newsletter for Updates
					</span>
				</h1>
			</div>
		</div>
	);
}

export default NewsLetter;

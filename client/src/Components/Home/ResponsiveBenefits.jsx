import React from "react";

function ResponsiveBenefits() {
	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center gap-5 p-10 bg-light-yellow">
			<div className="flex flex-col justify-between h-[33rem]">
				<div className="uppercase flex flex-col h-full justify-between py-24">
					<h4 className="text-xl font-crimson-pro text-slate">
						Yoga is Fun!
					</h4>
					<h1 className="text-3xl">
						Benefits of <span className="text-7xl">Yoga</span>
					</h1>
				</div>
				<div className="flex flex-col justify-between p-5 bg-yellow rounded-xl gap-4 drop-shadow-lg">
					<p className="text-white">
						<div>
							Our programs are designed to help you achieve your
							goals.
						</div>
						<div>
							We offer a variety of programs that cater to your
							needs.
						</div>
					</p>
					<div className="flex justify-end">
						<>
							<button className="bg-white text-yellow hover:opacity-70 px-5 py-2 rounded-md font-open-sans font-semibold min-[920px]:text-xl">
								Learn More
							</button>
						</>
					</div>
				</div>
			</div>

			<div className=" flex flex-warp flex-col gap-2">
				<div className="p-10 w-full bg-white rounded-xl border flex flex-col gap-8 drop-shadow-md">
					<div className="">
						<h1 className="text-6xl">01</h1>
						<h1 className="text-4xl">Benefit 1</h1>
					</div>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
				</div>
				<div className="p-10 w-full bg-white rounded-xl border flex flex-col gap-8 drop-shadow-md">
					<div className="">
						<h1 className="text-6xl">02</h1>
						<h1 className="text-4xl">Benefit 2</h1>
					</div>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
				</div>
				<div className="p-10 w-full bg-white rounded-xl border flex flex-col gap-8 drop-shadow-md">
					<div className="">
						<h1 className="text-6xl">03</h1>
						<h1 className="text-4xl">Benefit 3</h1>
					</div>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
				</div>
				<div className="p-10 w-full bg-white rounded-xl border flex flex-col gap-8 drop-shadow-md">
					<div className="">
						<h1 className="text-6xl">04</h1>
						<h1 className="text-4xl">Benefit 4</h1>
					</div>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
				</div>
			</div>
		</div>
	);
}

export default ResponsiveBenefits;

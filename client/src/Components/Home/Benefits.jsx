import React from "react";
import WhiteButton from "../Reusables/WhiteButton";

function Benefits() {
	return (
		<div className="min-h-screen flex items-center justify-between gap-5 px-40 bg-peach">
			<div className="grid grid-cols-2 gap-0">
				<div className="p-10 w-full bg-white rounded-tl-xl border-r border-b flex flex-col gap-8 drop-shadow-md">
					<div className="">
						<h1 className="text-6xl">01</h1>
						<h1 className="text-4xl">Benefit 1</h1>
					</div>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
				</div>
				<div className="p-10 w-full bg-white rounded-tr-xl border-l border-b flex flex-col gap-8 drop-shadow-md">
					<div className="">
						<h1 className="text-6xl">02</h1>
						<h1 className="text-4xl">Benefit 2</h1>
					</div>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
				</div>
				<div className="p-10 w-full bg-white rounded-bl-xl border-r border-t flex flex-col gap-8 drop-shadow-md">
					<div className="">
						<h1 className="text-6xl">03</h1>
						<h1 className="text-4xl">Benefit 3</h1>
					</div>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
				</div>
				<div className="p-10 w-full bg-white rounded-br-xl border-l border-t flex flex-col gap-8 drop-shadow-md">
					<div className="">
						<h1 className="text-6xl">04</h1>
						<h1 className="text-4xl">Benefit 4</h1>
					</div>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-between h-[33rem]">
				<div className="uppercase flex flex-col h-full justify-between py-24">
					<h4 className="text-xl font-crimson-pro text-slate">Yoga is Fun!</h4>
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
						<WhiteButton text="Learn More" />
						</>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Benefits;

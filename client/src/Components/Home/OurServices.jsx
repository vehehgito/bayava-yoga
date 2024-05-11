import React from "react";

function OurServices() {
	const serviceContent = [
		{
			id: 1,
			title: "Service 1",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 2,
			title: "Service 2",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 3,
			title: "Service 3",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 4,
			title: "Service 4",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 5,
			title: "Service 5",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 6,
			title: "Service 6",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 7,
			title: "Service 7",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 8,
			title: "Service 8",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
	];

	return (
		<div className="min-h-screen flex flex-col items-center justify-between py-20 gap-10">
			<div className="flex items-center">
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase">Our Services</h1>
			</div>
			<div className="">
				<div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 items-center justify-center gap-7 p-10">
					{serviceContent.map((service) => {
						return (
							<div
								key={service.id}
								className="flex flex-col items-center justify-center gap-3 rounded-md shadow-md p-12 drop-shadow-md bg-smoke-brown text-white"
							>
								<h1 className="min-[933px]:text-3xl text-5xl font-crimson rounded-full w-20 h-full bg-smoke-yellow text-smoke-brown flex items-center justify-center">
                                    {service.id}
                                </h1>
								<h2 className="md:text-6xl text-4xl font-crimson-pro">
                                    {service.title}
                                </h2>
								<p className="w-1/2 text-center text-smoke-yellow">
									{service.content}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default OurServices;

import React from "react";

function ResponsiveBenefits() {

    const benefitsContent = [
        {
            id: 1,
            title: "Benefit 1",
            description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
            id: 2,
            title: "Benefit 2",
            description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
            id: 3,
            title: "Benefit 3",
            description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
            id: 4,
            title: "Benefit 4",
            description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
    ]
	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center gap-5 p-10 bg-light-yellow">
			<div className="flex flex-col justify-between ">
				<div className="uppercase flex flex-col justify-between py-2">
					<h4 className="text-xl font-crimson-pro text-slate">
						Yoga is Fun!
					</h4>
					<h1 className="text-3xl">
						Benefits of <span className="text-7xl">Yoga</span>
					</h1>
				</div>
			</div>

			<div className=" flex flex-warp flex-col gap-2">
                {
                    benefitsContent.map((item, index) => {
                        return (
                            <div key={index} className="p-10 w-full bg-white rounded-xl border flex flex-col gap-8 drop-shadow-md">
                            <div className="">
                                <h1 className="text-6xl">{item.id}</h1>
                                <h1 className="text-4xl">{item.title}</h1>
                            </div>
                            <p className="text-xl">
                                {item.description}
                            </p>
                        </div>
                        )
                    })
                }
			</div>
			<div className="flex flex-col justify-between p-5 bg-yellow rounded-xl gap-4 drop-shadow-lg">
				<p className="text-white">
					<div>
						Our programs are designed to help you achieve your
						goals.
					</div>
					<div>
						We offer a variety of programs that cater to your needs.
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
	);
}

export default ResponsiveBenefits;

import React, { useState, useEffect } from "react";

const EducationPrograms = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTab = (index) => {
		setActiveTab(index);
	};

	const tabContent = [
		{
			title: "Yoga",
			content:
				"Our yoga program is designed to help you better your lifestyle. We offer a variety of classes for all levels.",
		},
		{
			title: "Meditation",
			content:
				"Our meditation program is designed to help you better your lifestyle. We offer a variety of classes for all levels.",
		},
		{
			title: "Nutrition",
			content:
				"Our nutrition program is designed to help you better your lifestyle. We offer a variety of classes for all levels.",
		},
		{
			title: "Mindfulness",
			content:
				"Our mindfulness program is designed to help you better your lifestyle. We offer a variety of classes for all levels.",
		},
		{
			title: "Wellness",
			content:
				"Our wellness program is designed to help you better your lifestyle. We offer a variety of classes for all levels.",
		},
		{
			title: "Fitness",
			content:
				"Our fitness program is designed to help you better your lifestyle. We offer a variety of classes for all levels.",
		},
	];

	return (
		<div className="min-h-screen w-full flex items-center py-20 gap-10 flex-col">
			<div className="bg-smoke-brown w-full flex flex-col items-center justify-center text-soft-gray p-20">
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase">
					Our Education Programs
				</h1>
				<p className="w-1/2 text-center">
					Our education programs are designed to help you and better
					your lifestyle.
				</p>
			</div>
			<div className="flex md:flex-col flex-row justify-center items-center gap-5 px-2">
				<div className="">
					<ul className="w-full flex md:flex-row flex-col items-center justify-between bg-smoke-brown text-white rounded-xl">
						{tabContent.map((tab, index) => {
							return (
								<li
									className={`
                                    cursor-pointer
                                    w-full text-right
                                    md:py-3 py-2 md:px-6 px-4
                                    rounded-xl
                                    ${
										activeTab === index
											? "text-smoke-brown bg-smoke-yellow"
											: ""
									}
                                `}
									key={index}
									onClick={() => handleTab(index)}
								>
									<h2>{tab.title}</h2>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="py-16">
					<h2 className="md:text-5xl font-bold text-3xl mb-8">
                        {tabContent[activeTab].title}
                    </h2>
					<p className="prose lg:prose-3xl md:prose-xl sm:prose-lg">
                        {tabContent[activeTab].content}
                    </p>
				</div>
			</div>
		</div>
	);
};

export default EducationPrograms;

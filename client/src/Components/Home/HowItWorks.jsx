import React from "react";
import Steps from "./Steps";
import YellowButton from "../Reusables/YellowButton";

function HowItWorks() {

    const stepsContent = [
        {
            id: 1,
            title: "What is Yoga? Why do we need it in modern times?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
            id: 2,
            title: "Our Divine Vision",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
            id: 3,
            title: "What is our Parampara? Why you should study at Brahmarishi Academy of Yoga and Ayurveda?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        }
    ]


	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center gap-10 py-7 md:px-12 px-0">
			<div className="flex items-center justify-center w-full">
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase font-crimson text-center">Our Vision</h1>
			</div>
			<div className="flex items-center justify-between min-[933px]:flex-row flex-col">
				<div className="flex flex-col justify-between items-center gap-10">
					<div className="flex flex-col items-center justify-center gap-5 py-4">
						{
                            stepsContent.map((item, index) => {
                                return (
                                    <Steps key={index} id={item.id} title={item.title} description={item.description} />
                                )
                            })
                        }
					</div>
					<div>
                        <YellowButton text="Learn More" />
                    </div>
				</div>
				<div>
					<img
						src="https://plus.unsplash.com/premium_photo-1663013710516-40cf01373a2f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="How It Works"
						className="w-96 h-96 object-cover rounded drop-shadow-md min-[933px]:flex hidden"
					/>
				</div>
			</div>
		</div>
	);
}

export default HowItWorks;

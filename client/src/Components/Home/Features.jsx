import React from "react";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";
import YellowButton from "../Reusables/YellowButton";

function Features() {
	const featureContent = [
		{
			imgSrc: "https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg",
			title: "Feature 1",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit",
		},
		{
			imgSrc: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
			title: "Feature 2",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit",
		},
		{
			imgSrc: "https://images.pexels.com/photos/2394051/pexels-photo-2394051.jpeg",
			title: "Feature 3",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit",
		},
		{
			imgSrc: "https://images.pexels.com/photos/1191804/pexels-photo-1191804.jpeg",
			title: "Feature 4",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit",
		},
	];

	return (
		<div className="flex flex-col justify-center items-center gap-5">
			<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase py-10">Features</h1>

			<div className="flex flex-wrap justify-evenly items-center gap-5 py-10">
				{featureContent.map((item, index) => {
					return (
                        <ImageCard key={index} imgSrc={item.imgSrc}>
						<h1 className="text-4xl">{item.title}</h1>
						<p className="text-xl">
                            {item.description}
						</p>
					</ImageCard>
                    )
				})}

			</div>

			<div className="flex justify-center items-center p-10">
					<Link to="/">
						<YellowButton text="More about Features" />
					</Link>
			</div>
		</div>
	);
}

export default Features;

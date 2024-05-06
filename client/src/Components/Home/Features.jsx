import React from "react";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";

function Features() {
    return(
        <div className="flex-col justify-center items-center">
            <h1 className="text-6xl text-center py-10">Features</h1>

            <div className="flex justify-evenly items-center py-10">
                <ImageCard imgSrc="https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg">
                    <h1 className="text-4xl">Feature 1</h1>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </ImageCard>

                <ImageCard imgSrc="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg">
                    <h1 className="text-4xl">Feature 2</h1>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </ImageCard>

                <ImageCard imgSrc="https://images.pexels.com/photos/2394051/pexels-photo-2394051.jpeg">
                    <h1 className="text-4xl">Feature 3</h1>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </ImageCard>

                <ImageCard imgSrc="https://images.pexels.com/photos/1191804/pexels-photo-1191804.jpeg">
                    <h1 className="text-4xl">Feature 4</h1>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </ImageCard>
            </div>
            
            <div className="flex justify-center items-center p-10">
            <button className="bg-yellow hover:bg-yellow/60 text-white px-5 py-2 rounded-md font-open-sans font-semibold min-[920px]:text-xl">
					<Link to="/">More About Features</Link>
			</button>
            </div>
        </div>
    );
}

export default Features;
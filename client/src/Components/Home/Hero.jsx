import React from "react";
import { Link } from "react-router-dom";

function Hero() {
	return (
        <div className="w-full h-screen">
            <div className="absolute w-full h-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/1525852/pexels-photo-1525852.jpeg')]"></div>
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
            <div className="relative h-screen w-full flex items-center justify-center">
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5">
                    <div className="font-crimson uppercase">
                        <h1 className="md:text-5xl text-4xl text-white font-bold w-26 shadow-peach">Making Life a</h1>
                        <span className="md:text-7xl text-5xl text-peach font-bold shadow-white">
                            Celebration
                        </span>
                    </div>
                    <p className="text-white font-light md:text-2xl text-sm sm:text-[0.6rem]">
                        <div>
                            Fostering well-being through breath,
                        </div>
                        <div>
                            meditation yoga & programs
                        </div>
                    </p>
                    <div>
                        <Link to="/signup" className="">
                            <button className="bg-yellow hover:opacity-70 text-white px-5 py-2 rounded-md font-open-sans font-medium md:text-xl text-sm">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Hero;

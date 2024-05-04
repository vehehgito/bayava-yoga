import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutMenu from "./AboutMenu";

function Navbar() {
	const [aboutMenu, setAboutMenu] = useState(false);

	const aboutButton = () => {
		console.log("clicked");
		setAboutMenu(!aboutMenu);
	};

	return (
		<nav className="fixed top-0 left-0 z-100 w-full h-20 flex items-center justify-between px-40 bg-slate-100 drop-shadow-lg">
			<div>
				<h1 className="text-3xl font-bold">
					<Link to="/">Bayava Yoga</Link>
				</h1>
			</div>
			<div>
				<ul className="flex items-center justify-between gap-5 font-crimson-pro text-xl font-medium">
					<li>
						<Link to="/schedule">Schedule</Link>
					</li>
					<li>
						<Link to="/courses">Courses</Link>
					</li>
					<li>
						<Link to="/">Shop</Link>
					</li>
					<li>
						<div className="about inline-block relative">
							<button
								className="inline-flex items-center"
								onClick={aboutButton}
							>
								<span className="mr-1">About Us</span>
								<svg
									className="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
								</svg>
							</button>
							{aboutMenu && (
								<AboutMenu />
							)}
						</div>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</div>
			<div className="flex items-center justify-between gap-5">
				<button className="bg-yellow-500 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-crimson-pro text-xl">
					<Link to="/">Get Started</Link>
				</button>
				<select className="bg-gray-100 border px-5 py-2 rounded-md focus:ring-0 font-open-sans ">
					<option>English</option>
					<option>Hindi</option>
					<option>Russian</option>
				</select>
			</div>
		</nav>
	);
}

export default Navbar;

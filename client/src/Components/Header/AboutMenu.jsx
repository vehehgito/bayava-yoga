import React from "react";
import { Link } from "react-router-dom";

function AboutMenu() {
	return (
		<div className="">
			<ul className="flex-col justify-center about-menu hidden text-gray-700 absolute w-48 h-26 bg-white rounded-md shadow-lg">
				<Link className="" to="/our-teachers">
					<li className="p-3 hover:bg-slate-500 text-smoke-brown hover:bg-smoke-yellow hover:text-smoke-brown rounded-t hover:cursor-pointer">
						Our Team
					</li>
				</Link>
				<Link to="/about-academy">
					<li className="p-3 hover:bg-slate-500 text-smoke-brown hover:bg-smoke-yellow hover:text-smoke-brown rounded-b hover:cursor-pointer">
						About Academy
					</li>
				</Link>
			</ul>
		</div>
	);
}

export default AboutMenu;

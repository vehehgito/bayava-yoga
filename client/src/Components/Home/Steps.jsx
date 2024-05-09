import React from "react";

function Steps(props) {

    const title = props.title
    const description = props.description
    const id = props.id

	return (
		<div className="flex items-center bg-light-blue text-white min-[933px]:p-5 p-2 gap-5 rounded-md drop-shadow-lg">
			<div className="min-[933px]:w-20 w-12 min-[933px]:h-20 h-12 rounded-full flex justify-center items-center bg-yellow">
				<h1 className="min-[933px]:text-6xl text-5xl text-light-blue">{id}</h1>
			</div>
			<div className="flex flex-col gap-4">
				<div>
					<h1 className="min-[933px]:text-4xl text-2xl font-black">
                        {title}
                    </h1>
				</div>
				<div>
					<p className="min-[933px]:text-xl text-sm text-yellow font-semibold">
                        {description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Steps;

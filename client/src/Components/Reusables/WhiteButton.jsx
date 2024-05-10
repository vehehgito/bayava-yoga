import React from "react";

function WhiteButton(props) {
    
    const onclick = props.onclick
    const text = props.text


	return (
		<div>
			<button onClick={onclick} className="bg-white text-smoke-brown hover:opacity-70 px-5 py-2 rounded-md font-open-sans font-semibold min-[920px]:text-xl">
				{text}
			</button>
		</div>
	);
}

export default WhiteButton;

import React, {useState} from "react";

function Accordion(props) {

    const [accordion, setAccordion] = useState(false);

    const question = props.question;
    const answer = props.answer;

	return (
		<div>
			<div>
				<button
					onClick={() => setAccordion(accordion)}
					className="w-full flex items-center justify-between bg-white shadow-lg p-6 rounded-lg"
				>
					<h3 className="text-xl font-semibold">{question}</h3>
                    {
                        accordion ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        )
                    }
				</button>
				<div
					className={`bg-white shadow-lg p-6 rounded-lg ${
                        accordion ? "block" : "hidden"
					}`}
				>
					<p>{answer}</p>
				</div>
			</div>
		</div>
	);
}

export default Accordion;

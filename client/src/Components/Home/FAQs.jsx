import React, {useState} from "react";


function FAQs() {

    const FAQContent = [
        {
            id: 1,
            question: "How does the free trial work?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isOpen: false
        },
        {
            id: 2,
            question: "Can I cancel at any time?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isOpen: false
        },
        {
            id: 3,
            question: "Do you offer any discounts?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isOpen: false
        },
        {
            id: 4,
            question: "What is the refund policy?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            isOpen: false
        }
    ]


	return (
		<div className="min-h-screen">
			<section className="py-20 bg-gray-100">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase">
							Frequently Asked Questions
						</h1>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {
                            FAQContent.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div>
                                            <div>
                                                <h2 className="text-3xl font-bold">
                                                    {item.question}
                                                </h2>
                                            </div>
                                            <div>
                                                <p className="text-xl">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

					</div>
				</div>
			</section>
		</div>
	);
}

export default FAQs;

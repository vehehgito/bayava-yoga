import React from "react";
import YellowButton from "../Reusables/YellowButton";

function Reviews() {
	const reviewsContent = [
		{
			id: 1,
			review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			name: "Customer Name",
			position: "Customer Position",
			imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			name: "Customer Name",
			position: "Customer Position",
			imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			name: "Customer Name",
			position: "Customer Position",
			imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	];

	return (
		<div className="min-h-screen flex flex-col items-center justify-between py-40">
			<div>
				<h1 className="min-[933px]:text-7xl text-4xl font-bold uppercase font-crimson text-center">
					What our Customers Say?
				</h1>
			</div>
			<div>
				<div className="flex flex-wrap justify-center items-center p-10 gap-7">
                    {
                        reviewsContent.map((review) => {
                            return (
                                <div key={review.id} className="flex flex-col items-center justify-between gap-3 rounded-md shadow-md drop-shadow-md bg-smoke-yellow text-smoke-brown p-12">
						<div className="">
							<div className="">
								<p className="text-left">
                                    {review.review}
								</p>
							</div>
							<div className="w-full flex items-center justify-end gap-5 pt-10">
								<div>
									<img
										src={review.imgSrc}
										alt="Customer"
										className="w-10 h-10 object-cover rounded-full drop-shadow-md min-[933px]:flex hidden"
									/>
								</div>
								<div className="flex flex-col justify-center ">
									<h2 className="md:text-3xl text-xl font-crimson-pro">
										{review.name}
									</h2>
									<h3 className="md:text-xl text-sm font-crimson-pro">
										{review.position}
									</h3>
								</div>
							</div>
						</div>
					</div>
                            )})
                    }
				</div>
			</div>
            <div className="">
                <YellowButton text="View More" />
            </div>
		</div>
	);
}

export default Reviews;

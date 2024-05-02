import React from "react";
import root from "../Assets/service-icon-1.png";
import root2 from "../Assets/service-icon-2.png";
import root3 from "../Assets/service-icon-3.png";
import root4 from "../Assets/service-icon-4.png";
import root5 from "../Assets/service-icon-5.png";
import root6 from "../Assets/service-icon-6.png";
import services from "../Assets/services.png";

export const Service = () => {
  return (
    <section id="services">
			<div className="text-center pt-20 service-container">
				<h2
					className="text-2xl text-jet font-bold uppercase"
					style={{ fontFamily: "maharlika" }}
				>
					Our Services
				</h2>
				<h1
					className="text-6xl text-oxford_blue_2 font-bold pt-3"
					style={{ fontFamily: "maharlika" }}
				>
					What We Provide
				</h1>
			</div>
			<div className="flex content-center justify-center items-center gap-6 pt-20  service-card">
				<div className=" mx-10">
					<div className="flex gap-6 border-2 border-none bg-steel_blue bg-opacity-20 w-[24rem] rounded-3xl my-4 py-7 px-5">
						<figure className=" pl-4">
							<img src={root} alt="" />
						</figure>
						<div className="mt-11 ml-2">
							<h1 className="text-3xl text-oxford_blue_2 font-bold">
								Restorative Dentistry
							</h1>
							<p className="pt-2 text-jet text-md ">
								- Root Canal Treatment <br />
								- Crowns and Bridges <br />
								- Dental Implants <br />
								- Dentures (Fixed and Removable) <br />- Tooth
								Extractions
							</p>
						</div>
					</div>
					<div className="flex gap-6 border-2 border-none bg-steel_blue bg-opacity-20 w-[24rem] rounded-3xl my-4 py-7 px-5">
						<figure className="pl-4">
							<img src={root2} alt="" />
						</figure>
						<div className="ml-2  ">
							<h1 className="text-3xl text-oxford_blue_2 font-bold">
								Cosmetic Dentistry
							</h1>
							<p className="pt-2 text-jet text-md">
								- Teeth Whitening (Bleaching) <br />
								- Veneers (Laminates) <br />
								- Gum Contouring (Gum Surgeries) <br />
								- Smile Designing <br />
							</p>
						</div>
					</div>
				</div>
				<figure className="pt-32 banner w-[calc(30vw)]">
					<img src={services} alt="" />
				</figure>
				<div className="ml-10">
					<div className="flex gap-6 border-2 border-none bg-steel_blue bg-opacity-20 w-[24rem] rounded-3xl my-4 py-7 px-5">
						<figure className=" pl-4">
							<img src={root3} alt="" />
						</figure>
						<div className="mt-11 ml-2">
							<h1 className="text-3xl text-oxford_blue_2 font-bold">
								Orthodontics
							</h1>
							<p className="pt-2 text-jet text-md">
								- Orthodontic Treatment (Braces and Clear Aligners)
							</p>
						</div>
					</div>
					<div className="flex gap-6 border-2 border-none bg-steel_blue bg-opacity-20 w-[24rem] rounded-3xl my-4 py-7 px-5">
						<figure className=" pl-4">
							<img src={root4} alt="" />
						</figure>
						<div className="mt-11 ml-2">
							<h1 className="text-3xl text-oxford_blue_2 font-bold">
								Periodontal Care
							</h1>
							<p className="pt-2 text-jet text-md">
								- Gum Treatment <br />
								- Bad Breath Treatment <br />
							</p>
						</div>
					</div>
					<div className="flex gap-6 border-2 border-none bg-steel_blue bg-opacity-20 w-[24rem] rounded-3xl my-4 py-7 px-5">
						<figure className=" pl-4">
							<img src={root5} alt="" />
						</figure>
						<div className="mt-11 ml-2">
							<h1 className="text-3xl text-oxford_blue_2 font-bold">
								Preventative Care
							</h1>
							<p className="pt-2 text-jet text-md">
								- Professional Cleaning <br />- Pediatric Dentistry (All
								treatments for children) <br />
							</p>
						</div>
					</div>
					{/* <div className="flex gap-6 border-2 border-gainsboro_50 h-52 w-[21rem] rounded-md mt-4">
						<figure className="mt-12 pl-4">
							<img src={root6} alt="" />
						</figure>
						<div className="mt-11 ml-2">
							<h1 className="text-3xl text-oxford_blue_2 font-bold">
								Cavity Inspection
							</h1>
							<p className="pt-2 text-oxford_blue_2 text-md">
								Aenean eleifend turpis tellus, nec laoreet metus
								elementum ac.
							</p>
						</div>
					</div> */}
				</div>
			</div>
		</section>
  );
};

export default Service;

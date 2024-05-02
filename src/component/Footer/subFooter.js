import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";

const SubFooter = () => {
	return (
		<section className="mt-20 bg-oxford_blue_2 flex gap-32 subfooter">
			<div className="pt-10 ml-32 subfooter-head">
				<h1 className="text-white text-3xl font-extrabold">Pearls Dental Care</h1>
				<p className="text-md text-white pt-8 w-52">
					Visit us for a caring dental experience tailored to your needs !
				</p>
				<div className="text-white flex gap-5 pt-4">
					<span className="bg-gradient-to-tr from-carolina_blue to-royal_blue h-10 w-10 text-white rounded-full flex justify-center items-center">
						<AiOutlineClockCircle color="black" />
					</span>
					<div>
						<h1>Monday - Saturday:</h1>
						<p>9:00am - 10:00Pm</p>
					</div>
				</div>
			</div>
			<ul className="pt-10 ">
				<h1 className="text-white text-2xl font-bold w-40">Other Links</h1>
				<li className="pt-8 text-white font-bold inline-flex gap-1 cursor-pointer hover:text-white">
					<span className="pt-1 text-white font-extrabold">
						<AiOutlinePlus size="19" />
					</span>
					Home
				</li>
				<li className="pt-4 text-white font-bold inline-flex gap-1 cursor-pointer hover:text-white">
					<span className="pt-1 text-white font-extrabold">
						<AiOutlinePlus size="19" />
					</span>
				<a href="#aboutus">
					About Us
				</a>
				</li>
				<li className="pt-4 text-white font-bold inline-flex gap-1 cursor-pointer hover:text-white">
					<span className="pt-1 text-white font-extrabold">
						<AiOutlinePlus size="19" />
					</span>
					<a href="#services">
					Services
					</a>
				</li>
			</ul>

			{/* <div className="pt-10 subfooter-card">
				<h1 className="text-white text-2xl font-bold w-40">Other Links</h1>
				<div className="pt-8 text-white w-32 font-bold inline-flex gap-1 cursor-pointer hover:text-white">
					<span className="pt-1 text-white font-extrabold">
						<AiOutlinePlus size="19" />
					</span>
					Root Canal
				</div>
				<div className="pt-4 text-white w-40 font-bold inline-flex gap-1 cursor-pointer hover:text-white">
					<span className="pt-1 text-white font-extrabold">
						<AiOutlinePlus size="19" />
					</span>
					Alignment Teeth
				</div>
				<div className="pt-4 text-white w-40 font-bold inline-flex gap-1 cursor-pointer hover:text-white">
					<span className="pt-1 text-white font-extrabold">
						<AiOutlinePlus size="19" />
					</span>
					Cavity Inspection
				</div>
				<div className="pt-4 text-white font-bold inline-flex w-40 gap-1 cursor-pointer hover:text-white">
					<span className="pt-1 text-white font-extrabold">
						<AiOutlinePlus size="19" />
					</span>
					Cosmetic Teeth
				</div>
				<div className="pt-4 text-white font-bold inline-flex gap-1 cursor-pointer hover:text-white">
					<span className="pt-1 text-white font-extrabold">
						<AiOutlinePlus size="19" />
					</span>
					Oral Hygiene
				</div>
				<div className="pt-4 text-white font-bold inline-flex gap-1 cursor-pointer hover:text-white">
					<span className="pt-1 text-white font-extrabold">
						<AiOutlinePlus size="19" />
					</span>
					Live Advisory
				</div>
			</div> */}

			<div className="pt-10 mr-52 contact">
				<h1 className="text-white text-2xl font-bold">Contact Us</h1>
				<div className="pt-8 inline-flex gap-2 text-white w-[22rem]">
					<span className="bg-gradient-to-tr from-carolina_blue to-royal_blue h-10 w-10 text-black rounded-full flex justify-center items-center">
						<AiOutlineEnvironment />
					</span>
					Shop. no.1, Suyog Leher, Kondhwa, Pune, Maharashtra 411048
				</div>
				<div className="pt-4 inline-flex gap-2 text-white w-[24rem]">
					<span className="bg-gradient-to-tr from-carolina_blue to-royal_blue h-10 w-10 rounded-full text-black flex justify-center items-center">
						<AiOutlinePhone />
					</span>
					+91 8087600277
				</div>
				<div className="pt-4 inline-flex gap-2 text-white w-[24rem]">
					<span className="bg-gradient-to-tr from-carolina_blue to-royal_blue h-10 w-10 text-black rounded-full flex justify-center items-center">
						<AiOutlineMail />
					</span>{" "}
					drsumairabaig@gmail.com
				</div>
			</div>
		</section>
	);
};

export default SubFooter;

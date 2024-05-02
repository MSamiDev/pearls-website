import React from "react";
import { AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="flex justify-between bg-flickr_blue h-20 footer">
			<div className="text-white pt-6 ml-20">
				<p className="font-bold text-2xl">© 2022 All Rights Reserved.</p>
			</div>
			<div className="flex gap-4 pt-4 mr-14">
				<a href="https://www.instagram.com/dr_sumaira_baig/">
					<span className="h-12 w-12 rounded-full cursor-pointer flex justify-center items-center hover:bg-gradient-to-tr from-carolina_blue to-royal_blue bg-gainsboro_50 text-white">
						<AiFillInstagram />
					</span>
				</a>
				<a href="https://wa.me/+918087600277">
					<span className="h-12 w-12 rounded-full cursor-pointer flex justify-center items-center hover:bg-gradient-to-tr from-carolina_blue to-royal_blue bg-gainsboro_50 text-white">
						<AiOutlineWhatsApp />
					</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;

import React from "react";
import LinkBar from "./Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../Assets/logo.png";

const Navbar = ({ MobileLink }) => {
	return (
		<header className="w-full lg:pt-10 pt-4 cursor-pointer bg-hero">
			<div className="mx-auto container">
				<div className="flex items-center justify-between">
					<div className=" flex gap-3 items-center">
						<img src={logo} className=" h-24" />
						<h1
							className="font-extrabold text-4xl text-oxford_blue"
							style={{ fontFamily: "maharlika" }}
						>
							Pearls Dental Care
						</h1>
					</div>
					<LinkBar />

					<AiOutlineMenu
						onClick={() => MobileLink(true)}
						className="lg:hidden text-3xl text-oxford_blue cursor-pointer"
					/>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

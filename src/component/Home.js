import React from "react";
import Button from "./Button";
import Hero from "../Assets/hero.png";

export const Home = () => {
	return (
		<section className="flex gap-10  bg-hero bg-cover py-10 home">
			<div className="pt-[20rem] w-[50%] ml-40 home-container">
				<h2 className="text-royal_blue text-3xl font-extrabold  uppercase " style={{fontFamily: "maharlika"}}>
					Welcome to Pearls
				</h2>
				<h1 className=" text-oxford_blue_2 font-bold text-[5.3rem]  leading-[85px] pt-3" style={{fontFamily: "maharlika"}}>
				Your Smile, Our Priority!
				</h1>
				<p className="text-xl sm:text-md pt-8 text-oxford_blue opacity-[0.8]">
				We are dedicated to providing exceptional dental services in a warm and compassionate environment. Led by Dr. Sumaira Baig, we offer personalized care tailored to your unique needs, combining cutting-edge technology with a welcoming atmosphere for a positive experience during every visit.
				</p>
				<a href="https://wa.me/+918087600277" className="inline-flex pt-12">
					<Button text="GET IN TOUCH" />
				</a>
			</div>
			<figure className="pt-[10rem] h-[35rem] w-[35rem]">
				<img src={Hero} alt="hero-banner" />
			</figure>
		</section>
	);
};

export default Home;

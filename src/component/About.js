import React from "react";
import Button from "./Button";
import about_img from "../Assets/about-banner.png";

const About = () => {
	return (
		<section id="aboutus" className="flex content-center justify-center items-center gap-20 mt-36 about">
			<figure className="ml-32">
				<img src={about_img} alt="" className="h-[35rem] w-[30rem]" />
			</figure>
			<div className="w-[35rem] pt-4 about-container">
				<h2
					className="text-3xl text-jet font-bold pt-6 uppercase"
					style={{ fontFamily: "maharlika" }}
				>
					About Us
				</h2>
				<h1
					className="text-6xl text-oxford_blue_2 font-bold pt-4"
					style={{ fontFamily: "maharlika" }}
				>
					We Care For Your Dental Health
				</h1>
				<p className="text-oxford_blue_2 pt-4">
					At Pearls Dental Care, we are dedicated to providing exceptional
					dental services in a warm and compassionate environment. Under
					the leadership of Dr. Sumaira Baig, our team of highly skilled
					dental professionals is committed to delivering personalized care
					tailored to each patient's unique needs.
				</p>
				<p className="text-oxford_blue_2 pt-4">
					Our state-of-the-art facility combines cutting-edge technology
					with a welcoming atmosphere, ensuring your comfort throughout
					every visit. We prioritize patient education, taking the time to
					understand your concerns and goals, and guiding you towards
					optimal oral health.
				</p>
				<p className="text-oxford_blue_2 pt-4">
					From routine cleanings and preventative care to advanced
					restorative and cosmetic treatments, we offer a comprehensive
					range of services utilizing the latest techniques and materials.
					Our gentle approach and attention to detail ensure a positive
					experience for patients of all ages.
				</p>
				<p className="text-oxford_blue_2 pt-4">
					At the core of Pearls Dental Care is a commitment to building
					lasting relationships with our patients. We strive to create a
					trusted partnership, where your smile's well-being is our top
					priority. Experience the difference of our caring and
					professional approach - let us help you achieve a beautiful,
					healthy smile that you can be proud of.
				</p>
				<div className="pt-5">
					{/* <Button text="READ MORE" /> */}
				</div>
			</div>
		</section>
	);
};

export default About;

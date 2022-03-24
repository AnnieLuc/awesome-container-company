import React 								from "react";
import { motion }           from 'framer-motion';
import SectionHeading 			from "./section-heading/SectionHeading";
import { sectionVariants }  from '../utils/animationVariants';
import Instagram 						from "../images/social-links/instagram.svg";

/**
 * The **Footer** component representing the footer socials links and contacts.
 *
 * @version 1.0.0
 * @author [Alec Drosu](https://github.com/AlecDrosu)
 */
function Footer() {
	return (
		<motion.footer
			id="footer"
			className="bg-primary text-secondary-100 pt-[80px] pb-[60px]"
			variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2}}>
			<div className="flex justify-between max-w-[1440px] mx-auto px-[80px]">
				<div className="flex justify-between max-w-[720px] w-full lg:flex-col lg:max-w-[524px]">
					<div className=" flex flex-col">
						<SectionHeading align="left" color="secondary">
							Let's get in touch
						</SectionHeading>
						<div className="flex flex-col pt-[40px]">
							<span className="pb-[40px]">Hello@AwesomeContainer.com</span>
							<address className="text-sm not-italic">
								<span className="block">Address: 71 UBI Road 1, #08-42,</span>
								<span className="block">Oxley Bizhub, Singapore 408732</span>
							</address>
						</div>
					</div>
					<div className="flex flex-col lg:mt-[80px]">
						<SectionHeading align="left" color="secondary">
							Follow us
						</SectionHeading>
						<ul className="pt-[40px]">
							<li>
								<a
									href="https://www.instagram.com/tailwing/"
									className="flex flex-row mb-[20px]"
								>
									<img
										src={Instagram}
										alt="instagram"
										className="object-contain pr-[12px]"
									/>
									AwesomeContainers
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col">
					<SectionHeading align="left" color="secondary">
						Where we work
					</SectionHeading>
					<div className="flex flex-col pt-[40px]">
						<span>We currently operate in:</span>
						<span className="pb-[40px]">Singapore</span>
						<span>Planning to launch in 2022:</span>
						<span>UK, EU, OSEAN, China, Vietnam, Malaysia,</span>
						<span>Taiwan</span>
					</div>
				</div>
			</div>
			<div className="pt-[120px] pl-[80px] mx-auto max-w-[1440px] text-sm">
				Awesome Container Company{" "}
				<span className="text-secondary-100">&copy;</span> 2022{" "}
				<span className="pl-[40px]">Terms of Use</span>
			</div>
		</motion.footer>
	);
}

export default Footer;

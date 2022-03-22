import React 								from 'react';
import PropTypes  					from 'prop-types';
import { motion }       		from 'framer-motion';
import SectionHeading 			from './SectionHeading';
import { sectionVariants }  from '../utils/animationVariants';
import linkedInImg 					from '../images/social-links/linkedin.svg';

/**
 * The **AwesomeTeam** component representing the list of team members of the company.
 *
 * @version 1.0.0
 * @author [Alec Drosu](https://github.com/AlecDrosu)
 */
function AwesomeTeam({awesomeTeam}) {
	const renderImages = () => {
		return awesomeTeam.map(({ name, title, linkedIn, image }, index) => {
			return (
				<figure className="max-w-[146px]" key={index}>
					<img src={image} alt={image} className="object-cover" />
					<figcaption className="pt-[15px] text-2xl sec-text-primary leading-7 text-center">
						{name}
						<span className="block whitespace-nowrap">{title}</span>
						<a href={linkedIn} className="">
							<img
								src={linkedInImg}
								alt={name}
								className="mx-[auto] mt-[20px]"
							/>
						</a>
					</figcaption>
				</figure>
			);
		});
	};

	return (
		<motion.section
			id="awesome-team"
			className="pt-[180px]"
			variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2}}>
      <SectionHeading align="center" color="primary">
        An Awesome Team
      </SectionHeading>
			<div className="mx-auto pt-[80px] max-w-[746px] flex flex-col gap-y-[80px] items-center">
				<div className="w-full flex justify-between">{renderImages()}</div>
			</div>
		</motion.section>
	);
}

AwesomeTeam.propTypes = {
  awesomeTeam:    PropTypes.array.isRequired,
};

export default AwesomeTeam;

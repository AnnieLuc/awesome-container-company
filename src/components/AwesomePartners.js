import React 								from 'react';
import PropTypes  					from 'prop-types';
import { motion }       		from 'framer-motion';
import SectionHeading 			from './SectionHeading';
import { sectionVariants }  from '../utils/animationVariants';

/**
 * The **AwesomePartners** component representing the list of partners of the company.
 *
 * @version 1.0.0
 * @author [Alec Drosu](https://github.com/AlecDrosu)
 */
function AwesomePartners({awesomePartners}) {
	const renderImage = ({ image }, index) => {
		return (
			<img
				key={index}
				src={image}
				alt="partner"
				className="object-contain flex items-center justify-between object-center"
			/>
		);
	};

	return (
		<motion.section
			id="awesome-partners"
			className="pt-[126px]"
			variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2}}>
			<SectionHeading align="center" color="primary">
				And Awesome Partners
			</SectionHeading>
			<div className="mx-auto pt-[100px] pb-[130px] max-w-[772px] flex items-center flex-col">
				<div className="flex justify-between w-full">
					{awesomePartners.filter((_, index) => index < 3).map(renderImage)}
				</div>
				<div className="flex justify-between w-[56%]">
					{awesomePartners
						.filter((_, index) => index >= 3)
						.map(renderImage)}
				</div>
			</div>
		</motion.section>
	);
}

AwesomePartners.propTypes = {
  awesomePartners:    PropTypes.array.isRequired,
};

export default AwesomePartners;

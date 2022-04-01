import React 								from 'react';
import PropTypes  					from 'prop-types';
import { motion }       		from 'framer-motion';
import SectionHeading 			from './section-heading/SectionHeading';
import { sectionVariants }  from '../utils/animationVariants';

/**
 * The **AwesomePartners** component representing the list of partners of the company.
 *
 * @version 1.0.0
 * @author [Alec Drosu](https://github.com/AlecDrosu)
 */
function AwesomePartners({data}) {
	const { title, logos } = data;

	// Classes for JSX Elements
	const partnerImageClass 										= `object-contain flex items-center justify-between object-center`;
	const awesomePartnersSectionClass 					= `pt-[120px] md:pt-[100px] sm:px-[16px]`;
	const awesomePartnersSectionContainerClass 	= `mx-auto pt-[100px] pb-[130px] max-w-[772px] 
		flex items-center flex-col md:pt-[40px] md:pb-[60px]`;

	// Function to render the images of partners
	const renderImage = ({ url }, index) => {
		return (
			<img key={index} src={url} alt="partner" className={partnerImageClass} />
		);
	};

	return (
		<motion.section
			id="awesome-partners"
			className={awesomePartnersSectionClass}
			variants={sectionVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2}}>
			<SectionHeading align="center" color="primary">
				{title}
			</SectionHeading>
			<div className={awesomePartnersSectionContainerClass}>
				<div className="flex justify-between w-full md:flex-col md:max-w-[200px] md:gap-y-[40px]">
					{logos.filter((_, index) => index < 3).map(renderImage)}
				</div>
				<div className="flex justify-between w-[56%] md:w-auto md:flex-col md:max-w-[200px] md:gap-y-[40px]">
					{logos
						.filter((_, index) => index >= 3)
						.map(renderImage)}
				</div>
			</div>
		</motion.section>
	);
}

AwesomePartners.propTypes = {
  data:    PropTypes.object.isRequired,
};

export default AwesomePartners;

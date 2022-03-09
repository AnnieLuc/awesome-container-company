import React from 'react';
import {
	awesomePartnersFirstRow,
	awesomePartnersSecondRow,
} from '../utils/awesome-partners';
import SectionHeading from './SectionHeading';

function AwesomePartners() {
	const renderFirstRow = () => {
		return awesomePartnersFirstRow.map(({ image }, index) => {
			return (
				<img
					key={index}
					src={image}
					alt='partner'
					className='object-contain flex items-center justify-between object-center'
				/>
			);
		});
	};

	const renderSecondRow = () => {
		return awesomePartnersSecondRow.map(({ image }, index) => {
			return (
				<img
					key={index}
					src={image}
					alt='partner'
					className='object-contain flex items-center justify-between object-center'
				/>
			);
		});
	};

	return (
		<section className='pt-[126px]'>
			<SectionHeading align='center' color='primary'>
				And Awesome Partners
			</SectionHeading>
			<div className='mx-auto pt-[100px] pb-[130px] max-w-[772px] flex items-center flex-col'>
				<div className='flex justify-between w-full'>{renderFirstRow()}</div>
				<div className='flex justify-between w-[56%]'>{renderSecondRow()}</div>
			</div>
		</section>
	);
}

export default AwesomePartners;

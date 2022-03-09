import React from 'react';
import awesomePartners from '../utils/awesome-partners';
import SectionHeading from './SectionHeading';

function AwesomeTeam() {
	const renderImages = () => {
		return awesomePartners.map(({ image }, index) => {
			return (
				<img key={index} src={image} alt='partner' className='object-contain flex items-center justify-center object-center' />
			);
		});
	};

	return (
		<section className='pt-[126px]'>
			<SectionHeading align='center' color='primary'>
				And Awesome Partners
			</SectionHeading>
			<div className='mx-auto py-[120px] max-w-[772px] flex flex-col items-center'>
        <div className='grid grid-cols-3 grid-rows-2'>
          {renderImages()}
        </div>
			</div>
		</section>
	);
}

export default awesomePartners;

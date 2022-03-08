import React from 'react';
import awesomeTeam from '../utils/awesome-team';
import SectionHeading from './SectionHeading';

// create a function that renders all the images

function AwesomeTeam() {
	const renderImages = () => {
		return awesomeTeam.map(({ image }, index) => {
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
        {/* render the items in a grid where the first row was 3 columns and 1 row, and the second has 2 columns and 1 row */}
        <div className='grid grid-cols-3 grid-rows-2'>
          {renderImages()}
        </div>
				<div></div>
			</div>
		</section>
	);
}

export default AwesomeTeam;

import React 					from 'react';
import SectionHeading from './SectionHeading';
import awesomeTeam 		from '../utils/awesome-team';
import linkedInImg 		from '../images/social-links/linkedin.svg';

/**
 * The **AwesomeTeam** component representing the list of team members of the company.
 *
 * @version 1.0.0
 * @author [Alec Drosu](https://github.com/AlecDrosu)
 */
function AwesomeTeam() {
	const renderImages = () => {
		return awesomeTeam.map(({ name, title, linkedIn, image }, index) => {
			return (
				<figure className='max-w-[146px]' key={index}>
					<img src={image} alt={image} className='object-cover' />
					<figcaption className='pt-[15px] text-2xl sec-text-primary leading-7 text-center'>
						{name}
						<span className='block whitespace-nowrap'>{title}</span>
						<a href={linkedIn} className=''>
							<img
								src={linkedInImg}
								alt={name}
								className='mx-[auto] mt-[20px]'
							/>
						</a>
					</figcaption>
				</figure>
			);
		});
	};

	return (
		<section className='pt-[180px]'>
      <SectionHeading align='center' color='primary'>
        An Awesome Team
      </SectionHeading>
			<div className='mx-auto pt-[80px] max-w-[746px] flex flex-col gap-y-[80px] items-center'>
				<div className='w-full flex justify-between'>{renderImages()}</div>
			</div>
		</section>
	);
}

export default AwesomeTeam;

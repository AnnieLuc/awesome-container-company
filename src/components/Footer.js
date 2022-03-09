import React from 'react';
import SectionHeading from './SectionHeading';
import Instagram from '../images/social-links/instagram.svg';
import Twitter from '../images/social-links/twitter.svg';

function Footer() {
	return (
		<footer className='bg-primary text-secondary-100 pt-[80px] pb-[60px]'>
			<div className='flex justify-between max-w-[1440px] mx-auto px-[80px]'>
				<div className=' flex flex-col'>
					<SectionHeading align='left' color='secondary'>
						Let's get in touch
					</SectionHeading>
					<div className='flex flex-col pt-[40px]'>
						<span className='pb-[10px]'>hello@acc.com</span>
						<span className='pb-[40px]'>+65 0123 4567</span>
						<address className='text-sm not-italic'>
							<span className='block'>Blk 35 Mandalay Road # 13-37</span>
							<span className='block'>Mandalay Towers</span>
							<span className='block'>Singapore 308215</span>
						</address>
					</div>
				</div>
				<div className='flex flex-col'>
					<SectionHeading align='left' color='secondary'>
						Follow us
					</SectionHeading>
					<ul className='pt-[40px]'>
						<li>
							<a
								href='https://www.instagram.com/tailwing/'
								className='flex flex-row mb-[20px]'
							>
								<img
									src={Instagram}
									alt='instagram'
									className='object-contain pr-[12px]'
								/>
								instagram
							</a>
						</li>
						<li>
							<a
								href='https://www.twitter.com/tailwing/'
								className='flex flex-row'
							>
								<img
									src={Twitter}
									alt='twitter'
									className='object-contain pr-[12px]'
								/>
								twitter
							</a>
						</li>
					</ul>
				</div>
				<div className='flex flex-col'>
					<SectionHeading align='left' color='secondary'>
						Where we work
					</SectionHeading>
					<div className='flex flex-col pt-[40px]'>
						<span>We currently operate in:</span>
						<span className='pb-[40px]'>Singapore</span>
						<span>Planning to launch in 2022:</span>
						<span>UK, EU, OSEAN, China, Vietnam, Malaysia,</span>
						<span>Taiwan</span>
					</div>
				</div>
			</div>
			<div className='pt-[120px] pl-[80px] mx-auto max-w-[1440px] text-sm '>
				Awesome Container Company{' '}
				<span className='text-secondary-100'>&copy;</span> 2022{' '}
				<span className='pl-[40px]'>Terms of Use</span>
			</div>
		</footer>
	);
}

export default Footer;

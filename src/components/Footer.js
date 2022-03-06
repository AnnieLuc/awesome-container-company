import React from 'react';
import SectionHeading from './SectionHeading';
import Instagram from '../images/social-links/instagram.svg';
import Twitter from '../images/social-links/twitter.svg';

function Footer() {
	return (
		<footer className='bg-primary text-secondary-100 pt-[80px] pb-[60px]'>
			<div className='flex justify-between max-w-[1440px] mx-auto border-rose-500 px-[80px]'>
				<div className=' flex flex-col'>
					<SectionHeading align='left' color='secondary-100'>
						Let's get in touch
					</SectionHeading>
					<div className='flex flex-col pt-[40px]'>
						<span className='pb-[10px]'>
							hello@acc.com <br />
						</span>
						+65 0123 4567 <br />
						<br />
						<br />
						<p className='text-sm'>
							Blk 35 Mandalay Road # 13-37 <br />
							Mandalay Towers <br />
							Singapore 308215
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<SectionHeading align='left' color='secondary-100'>
						Follow us
					</SectionHeading>
					<div className='pt-[40px]'>
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
					</div>
				</div>
				<div className='flex flex-col'>
					<SectionHeading align='left' color='secondary-100'>
						Where we work
					</SectionHeading>
					<div className='flex flex-col pt-[40px]'>
						We currently operate in: <br />
						Singapore <br />
						<br />
						<br />
						Planning to launch in 2022: <br />
						UK, EU, OSEAN, China, Vietnam, Malaysia, <br />
						Taiwan
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

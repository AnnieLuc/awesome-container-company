import React from 'react';

function PopupWithForm(props) {
	return (
		<section className={`form-popup ${props.isOpen ? 'form-open' : ''}`}>
			<div className='w-[760px] h-[778px] bg-white px-[80px] rounded-[3px] shadow-sm'>
				<button
					type='button'
					onClick={props.onClose}
					className='form-close'
				></button>
				<h2 className='text-lg text-primary pt-[40.5px] leading-8 pb-[50px]'>
					Leave your contact and request, and out manager will reach out to you
					to establish our further partnership!
				</h2>
				<div className='flex flex-col'>
					<div className='text-sm pb-[11px] text-primary'>
						Personal or company name *
					</div>
					<label className='labels h-[60px]'>
						<input type='text' className='inputs'/>
					</label>
					<div className='text-sm pb-[11px] text-primary'>Email *</div>
					<label className='labels h-[60px]'>
						<input type='text' className='inputs' />
					</label>
					<div className='text-sm pb-[11px] text-primary'>
						Your request/interest
					</div>
					<label className='labels h-[180px]'>
						<input type='text' className='inputs' />
					</label>
				</div>
				<button type='submit' className='button-form'>Send</button>
			</div>
		</section>
	);
}

export default PopupWithForm;

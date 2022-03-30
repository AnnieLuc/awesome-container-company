import React                            from 'react';
import NavBar                           from './NavBar';
import Hero                      				from './Hero';
import BadEffects                				from './BadEffects';
import SustainabilityDelivered   				from './SustainabilityDelivered';
import HowItWorks 											from './HowItWorks';
import Impact														from './Impact';
import Competition			                from './competition/Competition';
import Sustainability            				from './Sustainability';
import Pricing                   				from './Pricing';
import AwesomeTeam                      from './AwesomeTeam';
import AwesomePartners                  from './AwesomePartners';
import Footer                           from './Footer';
import PopupWithForm 					from './form-popup/PopupWithForm';


// Import constants
import awesomePartners 									from '../constants/awesome-partners';
import awesomeTeam 											from '../constants/awesome-team';
import plasticsBadEffects 							from '../constants/plastics-bad-effects';
import features       									from '../constants/features';
import impacts              						from '../constants/impacts';
import chatMessages         						from '../constants/chat-messages';

/**
 * The main React **App** component.
 *
 * @version 1.0.0
 * @author [Alec Drosu](https://github.com/AlecDrosu)
 * @author [Ekaterina Cratcha](https://github.com/cratcha)
 * @author [Shraddha](https://github.com/5hraddha)
 */
function App() {
	const [isPopupOpen, setPopupOpen] 					= React.useState(false);
	const [isNavbarOpen, setIsNavbarOpen] 			= React.useState(true);
	const [screenWidth, setScreenWidth] 				= React.useState(window.innerWidth);
	const [isFormSubmitted, setFormSubmitted] 	= React.useState(false);

	const closePopup = () => {
		setPopupOpen(false);
		setFormSubmitted(false);
	};

	const handleButtonClick = () => {
		setPopupOpen(true);
	};

	React.useEffect(() => {
    const changeScreenWidth = () => {
			setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeScreenWidth);
    return () => {
      window.removeEventListener('resize', changeScreenWidth);
    }
  }, []);

	React.useEffect(() => {
		if(screenWidth <= 930){
				setIsNavbarOpen(false);
			} else {
				setIsNavbarOpen(true);
			}
	}, [screenWidth]);

	React.useEffect(() => {
		const closeByClick = e => {
      if(e.target.classList.contains('form-open')) {
        closePopup();
      }
			if(screenWidth <= 930 && isNavbarOpen){
				setIsNavbarOpen(false);
			}
    }
		const closeByEsc = (e) => {
			if (e.keyCode === 27) {
				closePopup();
			}
		};

		document.addEventListener('click', closeByClick);
		document.addEventListener('keydown', closeByEsc);

		return () => {
			document.removeEventListener('click', closeByClick);
			document.removeEventListener('keydown', closeByEsc);
		};
	}, [isPopupOpen, isNavbarOpen, screenWidth]);


	return (
		<div className='font-serif text-base font-normal leading-5'>
			<NavBar
				onButtonClick={handleButtonClick}
				isNavbarOpen={isNavbarOpen}
				setIsNavbarOpen={setIsNavbarOpen}
				screenWidth={screenWidth} />
			<Hero chatMessages={chatMessages} />
			<main>
				<BadEffects plasticsBadEffects={plasticsBadEffects} />
				<SustainabilityDelivered features={features} />
				<HowItWorks onButtonClick={handleButtonClick} />
				<Impact impacts={impacts} />
				<Competition />
				<Sustainability />
				<Pricing onButtonClick={handleButtonClick} />
				<AwesomeTeam awesomeTeam={awesomeTeam} />
				<AwesomePartners awesomePartners={awesomePartners} />
			</main>
			<PopupWithForm
				onClose={closePopup}
				isOpen={isPopupOpen}
				isFormSubmitted={isFormSubmitted}
				setFormSubmitted={setFormSubmitted} />
			<Footer />
		</div>
	);
}

export default App;

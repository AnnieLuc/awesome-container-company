import React                            from 'react';
import NavBar                           from './NavBar';
import Hero                      				from './Hero';
import BadEffects                				from './BadEffects';
import SustainabilityDelivered   				from './SustainabilityDelivered';
import HowItWorks 											from './HowItWorks';
import Impact														from './Impact';
import Competition			                from './Competition';
import Sustainability            				from './Sustainability';
import Pricing                   				from './Pricing';
import AwesomeTeam                      from './AwesomeTeam';
import AwesomePartners                  from './AwesomePartners';
import Footer                           from './Footer';
import PopupWithForm                    from './PopupWithForm';

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
	const [isPopupOpen, setPopupOpen] = React.useState(false);

	const closePopup = () => {
		setPopupOpen(false);
	};

	const handleButtonClick = () => {
		setPopupOpen(true);
	};

	React.useEffect(() => {
		const closeByEsc = (e) => {
			if (e.keyCode === 27) {
				closePopup();
			}
		};
		document.addEventListener('keydown', closeByEsc);
		return () => {
			document.removeEventListener('keydown', closeByEsc);
		};
	}, []);

	return (
		<div className='font-serif text-base font-normal leading-5'>
			<NavBar onButtonClick={handleButtonClick} />
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
			<PopupWithForm onClose={closePopup} isOpen={isPopupOpen} />
			<Footer />
		</div>
	);
}

export default App;

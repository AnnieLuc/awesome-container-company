import React                            from 'react';
import NavBar                           from './NavBar';
import HeroSection                      from './HeroSection';
import BadEffectsSection                from './BadEffectsSection';
import SustainabilityDeliveredSection   from './SustainabilityDeliveredSection';
import ImpactSection                    from './ImpactSection';
import CompetitionSection               from './CompetitionSection';
import SustainabilitySection            from './SustainabilitySection';
import PricingSection                   from './PricingSection';
import AwesomeTeam                      from './AwesomeTeam';
import AwesomePartners                  from './AwesomePartners';
import Footer                           from './Footer';
import PopupWithForm                    from './PopupWithForm';

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
			<HeroSection />
			<main>
				<BadEffectsSection />
				<SustainabilityDeliveredSection />
				<ImpactSection />
				<CompetitionSection />
				<SustainabilitySection />
				<PricingSection onButtonClick={handleButtonClick} />
				<AwesomeTeam />
				<AwesomePartners />
			</main>
			<PopupWithForm onClose={closePopup} isOpen={isPopupOpen} />
			<Footer />
		</div>
	);
}

export default App;

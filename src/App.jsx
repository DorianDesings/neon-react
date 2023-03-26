import Header from './components/header/Header';
import SectionFocus from './components/section-focus/SectionFocus';
import SectionPrivacy from './components/section-privacy/SectionPrivacy';
import SectionLogos from './components/section/Section';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<SectionLogos />
			<SectionFocus />
			<SectionPrivacy />
		</>
	);
};

export default App;

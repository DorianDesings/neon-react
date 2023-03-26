import { Buttons, CTAButtonWithArrow, DarkButton } from '../button/styles';
import Text from '../text/Text';
import { ItalicText, MainTitle, StyledHero } from './styles';

const Hero = () => {
	return (
		<StyledHero>
			<MainTitle>
				Where the world builds <ItalicText>software</ItalicText>
			</MainTitle>
			<Text
				text='Our landing page template works on all devices, so you only have to set
				it up once, and get beautiful results forever.'
			/>

			<Buttons>
				<CTAButtonWithArrow>
					<a href='#'>Get Started For Free</a>
					<img src='/images/arrow-right.svg' alt='Arrow Icon' />
				</CTAButtonWithArrow>

				<DarkButton>Explore Docs</DarkButton>
			</Buttons>
		</StyledHero>
	);
};

export default Hero;

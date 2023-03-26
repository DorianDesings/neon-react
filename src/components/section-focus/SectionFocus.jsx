import { FEATURES } from '../../constants/features';
import Title from '../title/Title';
import { StyledFeature, StyledFeatureText, StyledFeatureTitle } from './styles';

const SectionFocus = () => {
	return (
		<>
			<Title title={'Focus on solving bigger problems'} />
			<img src='images/features.svg' alt='Features image' />
			{FEATURES.map(feature => (
				<StyledFeature key={feature.id}>
					<img src={feature.icon} alt='Feature icon' />
					<StyledFeatureTitle>{feature.title}</StyledFeatureTitle>
					<StyledFeatureText>{feature.text}</StyledFeatureText>
				</StyledFeature>
			))}
		</>
	);
};

export default SectionFocus;

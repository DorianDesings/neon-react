import { LOGOS } from '../../constants/logos';
import Icon from '../icon/Icon';
import { StyledLogos } from './styles';

const SectionLogos = () => {
	return (
		<StyledLogos>
			{LOGOS.map(logo => (
				<Icon key={logo.id} src={logo.icon} />
			))}
		</StyledLogos>
	);
};

export default SectionLogos;

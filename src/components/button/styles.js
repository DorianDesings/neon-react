import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const { accentLight, accent, neutral100, dark100, dark200 } = COLORS;

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Button = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 3rem;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
`;

const GhostButton = styled(Button)`
	color: ${neutral100};
`;

const DarkButton = styled(Button)`
	background-image: linear-gradient(${dark100}, ${dark200});
`;
const CTAButton = styled(Button)`
	background-image: linear-gradient(${accentLight}, ${accent});
`;

const CTAButtonWithArrow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	background-image: linear-gradient(${accentLight}, ${accent});
	box-shadow: 0px 0.25rem 0.875rem rgba(0, 0, 0, 0.5);
`;

export {
	Buttons,
	Button,
	GhostButton,
	DarkButton,
	CTAButton,
	CTAButtonWithArrow
};

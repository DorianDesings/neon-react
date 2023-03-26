import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const { neutral100 } = COLORS;

const StyledFeature = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	text-align: center;
`;

const StyledFeatureTitle = styled.h3`
	margin-bottom: 0;
	font-size: 1.3rem;
`;

const StyledFeatureText = styled.p`
	font-size: 1.1rem;
	line-height: 1.5;
	color: ${neutral100};
`;

export { StyledFeature, StyledFeatureTitle, StyledFeatureText };

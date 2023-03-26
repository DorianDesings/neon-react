import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const { neutral100 } = COLORS;

const StyledText = styled.p`
	text-align: center;
	line-height: 1.5;
	font-size: 1.2rem;
	color: ${neutral100};
`;

export { StyledText };

import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const { neutralMiddle100 } = COLORS;

const StyledLogos = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2.5rem;
	margin-inline: 1rem;
	padding: 1rem 0;
	padding-bottom: 2rem;
	border-bottom: 1px solid ${neutralMiddle100};
`;
export { StyledLogos };

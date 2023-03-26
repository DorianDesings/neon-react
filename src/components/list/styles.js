import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const { neutral100 } = COLORS;

const StyledList = styled.ul`
	gap: 1rem;
	width: max-content;
	margin-left: auto;
	margin-right: auto;
	padding-left: 0;
	list-style: none;
	color: ${neutral100};
`;

const StyledListItem = styled.li`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
`;

const StyledCheck = styled.img`
	width: 0.75rem;
`;

export { StyledList, StyledCheck, StyledListItem };

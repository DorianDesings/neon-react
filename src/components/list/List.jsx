import { StyledCheck, StyledList, StyledListItem } from './styles';

const List = ({ items }) => {
	return (
		<StyledList>
			{items.map(({ id, icon, text }) => (
				<StyledListItem key={id}>
					<StyledCheck src={icon} alt='icon check' />
					<span>{text}</span>
				</StyledListItem>
			))}
		</StyledList>
	);
};

export default List;

import { v4 } from 'uuid';

const ICON_CHECK = 'images/check.svg';

export const PRIVACY_ITEMS = [
	{
		id: v4(),
		icon: ICON_CHECK,
		text: 'Performance reviews'
	},
	{
		id: v4(),
		icon: ICON_CHECK,
		text: 'Objectives and goal setting'
	},
	{
		id: v4(),
		icon: ICON_CHECK,
		text: 'Manager check-ins'
	}
];

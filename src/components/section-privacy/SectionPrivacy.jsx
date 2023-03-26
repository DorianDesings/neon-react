import { PRIVACY_ITEMS } from '../../constants/list-items';
import List from '../list/List';
import Text from '../text/Text';
import Title from '../title/Title';

const SectionPrivacy = () => {
	return (
		<>
			<Title title={'Use sensitive data without sacrificing privacy'} />
			<Text
				text={
					'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.'
				}
			/>
			<img src='/public/images/features-02.png' alt='Features preview' />
			<Title title={'Standardized dev environments'} />
			<Text
				text={
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				}
			/>
			<List items={PRIVACY_ITEMS} />
		</>
	);
};

export default SectionPrivacy;

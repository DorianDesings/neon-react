import { CTAButtonWithArrow, GhostButton } from '../button/styles';
import Hero from '../hero/Hero';
import Logo from '../logo/Logo';
import { StyledMenu, StyledNav } from './styles';

const Header = () => {
	return (
		<header>
			<StyledNav>
				<Logo src='images/logo.svg' alt='Logo' />
				<StyledMenu>
					<li>
						<GhostButton href='#'>Sign in</GhostButton>
					</li>
					<li>
						<CTAButtonWithArrow>
							<a href='#'>Get Started</a>
							<img src='/images/arrow-right.svg' alt='' />
						</CTAButtonWithArrow>
					</li>
				</StyledMenu>
			</StyledNav>
			<Hero />
		</header>
	);
};

export default Header;

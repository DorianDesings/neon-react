import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
	box-sizing: border-box;
}

body {
	margin: 0;
	max-width: 1100px;
	margin-left: auto;
	margin-right: auto;
	font-family: 'Inter', sans-serif;
	color:${COLORS.almostWhite};
	background-color: ${COLORS.dark400};
}

img,
video {
	max-width: 100%;
	display: block;
}

ul {
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
}

a {
	text-decoration: none;
	color: inherit;
}

@font-face {
	font-family: 'Uncut-Sans-Bold';
	font-weight: 700;
	src: url('fonts/uncut-sans-bold.woff2') format('woff2')
}

@font-face {
	font-family: 'Uncut-Sans-Bold-Italic';
	font-weight: 700;
	src: url('fonts/uncut-sans-bold-italic.woff2') format('woff2'),
}
`;

export { GlobalStyles };

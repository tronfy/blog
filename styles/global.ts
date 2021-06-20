import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	//outline: 1px solid magenta;
}

body {
	display: block;
	background: ${props => props.theme.colors.background};
	color: ${props => props.theme.colors.foreground};

	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 14pt;
	text-align: justify;
	text-justify: auto;
}

.container {
	min-height: 100vh;
	padding: 6vh 0;
	margin: 0 auto;
	height: 100vh;
	width: 40vw;
}

h1 {
	font-size: 28pt;
}

h2 {
	font-size: 20pt;
}

h3 {
	font-size: 16pt;
}

a {
	color: ${props => props.theme.colors.primary};
	text-decoration: underline 1pt solid;
	border-radius: .2em;

	transition-duration: .2s;
	transition-timing-function: ease-out;
}

a:hover {
	color: ${props => props.theme.colors.background};
	background: ${props => props.theme.colors.primary};
	text-decoration: none;

	transition-duration: .2s;
	transition-timing-function: ease-out;
}

ul li {
	list-style: none;
}

strong {
	color: ${props => props.theme.colors.secondary};
}

::selection {
	background: ${props => props.theme.colors.secondary};
	color: ${props => props.theme.colors.background};
}

@media (max-width: 1600px) {
	.container {
		width: 60vw;
	}
}

@media (max-width: 1000px) {
	.container {
		width: 70vw;
	}
}

@media (max-width: 767px) {
	.container {
		width: 90vw;
	}
}
`

export default GlobalStyle

import { createGlobalStyle } from 'styled-components'

import theme from './theme'

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;

	// firefox scrollbar styling
	scrollbar-width: thin;
	scrollbar-color: ${theme.colors.primaryDark} ${theme.colors.background};
}

body {
	display: block;
	background: ${theme.colors.background};
	color: ${theme.colors.foreground};

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
	width: 800px;
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
	text-decoration: none;
	color: ${theme.colors.foreground};
}

.header {
	padding: 0 0 3vh 0;
}

.post_item {
	padding: 1rem 2em 1rem 0;

	p {
		opacity: .9;
	}

	.post_item_header,
	.post_item_footer {
		font-size: 10pt;
		opacity: .6;
	}
}

ul li {
	list-style: none;
}

strong {
	color: ${theme.colors.secondary};
}


// scrollbar styling (non-firefox)
::-webkit-scrollbar {
	width: .5rem;
}
::-webkit-scrollbar-track {
	background: ${theme.colors.background};
}
::-webkit-scrollbar-thumb {
	background: ${theme.colors.primaryDark};
	border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
	background: ${theme.colors.primary};
}

::selection {
	background: ${theme.colors.secondary};
	color: ${theme.colors.background};
}

@media (max-width: 820px) {
	.container {
		width: 95vw;
	}
}
`

export default GlobalStyle

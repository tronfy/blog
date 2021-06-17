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
		color: ${props => props.theme.colors.text};

		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 14pt;
		text-align: justify;
		text-justify: auto;
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
		//text-decoration: underline 1.5pt solid;
		//text-underline-offset: 2pt;
		text-decoration: none;
	}

	a:hover {
		color: ${props => props.theme.colors.background};
		background: ${props => props.theme.colors.primary};
		text-decoration: none;
	}

	li {
		list-style: none;
	}

	::selection {
		background: ${props => props.theme.colors.secondary};
		color: ${props => props.theme.colors.background};
	}
`

export default GlobalStyle

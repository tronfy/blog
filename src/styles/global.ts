import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background: ${props => props.theme.colors.background};
		color: ${props => props.theme.colors.text};
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	body a {
		color: ${props => props.theme.colors.primary};
		text-decoration: none;
	}

	body a:hover {
		color: ${props => props.theme.colors.background};
		background: ${props => props.theme.colors.primary};
	}

	::selection {
		background: ${props => props.theme.colors.secondary};
		color: ${props => props.theme.colors.background};
	}
`

export default GlobalStyle

import theme from './theme'

const prism = {
	'code[class*="language-"]': {
		color: theme.colors.foregroundLight,
		background: 'none',
		fontFamily:
			"\"Fira Code\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
		textAlign: 'left',
		whiteSpace: 'pre',
		wordSpacing: 'normal',
		wordBreak: 'normal',
		wordWrap: 'normal',
		lineHeight: '1.5',
		MozTabSize: '4',
		OTabSize: '4',
		tabSize: '4',
		WebkitHyphens: 'none',
		MozHyphens: 'none',
		msHyphens: 'none',
		hyphens: 'none',
	},
	'pre[class*="language-"]': {
		color: theme.colors.foregroundLight,
		background: theme.colors.backgroundLight,
		fontFamily:
			"\"Fira Code\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
		textAlign: 'left',
		whiteSpace: 'pre',
		wordSpacing: 'normal',
		wordBreak: 'normal',
		wordWrap: 'normal',
		lineHeight: '1.5',
		MozTabSize: '4',
		OTabSize: '4',
		tabSize: '4',
		WebkitHyphens: 'none',
		MozHyphens: 'none',
		msHyphens: 'none',
		hyphens: 'none',
		padding: '.5em',
		margin: '.5em 0',
		overflow: 'auto',
		borderRadius: '0.3em',
	},
	':not(pre) > code[class*="language-"]': {
		background: theme.colors.backgroundLight,
		padding: '.1em',
		borderRadius: '.3em',
		whiteSpace: 'normal',
	},
	comment: {
		color: theme.colors.foregroundDark,
	},
	prolog: {
		color: theme.colors.foregroundDark,
	},
	doctype: {
		color: theme.colors.foregroundDark,
	},
	cdata: {
		color: theme.colors.foregroundDark,
	},
	punctuation: {
		color: theme.colors.secondaryDark,
	},
	'.namespace': {
		Opacity: '.7',
	},
	property: {
		color: theme.colors.secondaryDark,
	},
	tag: {
		color: theme.colors.secondaryDark,
	},
	constant: {
		color: theme.colors.secondaryDark,
	},
	symbol: {
		color: theme.colors.secondaryDark,
	},
	deleted: {
		color: theme.colors.secondaryDark,
	},
	number: {
		color: theme.colors.primaryDark,
	},
	boolean: {
		color: theme.colors.secondaryDark,
	},
	selector: {
		color: theme.colors.primaryLight,
	},
	'attr-name': {
		color: theme.colors.primaryLight,
	},
	string: {
		color: theme.colors.primaryLight,
	},
	char: {
		color: theme.colors.primaryLight,
	},
	builtin: {
		color: theme.colors.primaryLight,
	},
	inserted: {
		color: theme.colors.primaryLight,
	},
	operator: {
		color: theme.colors.secondaryDark,
	},
	entity: {
		color: theme.colors.secondaryDark,
		cursor: 'help',
	},
	url: {
		color: theme.colors.secondaryDark,
	},
	'.language-css .token.string': {
		color: theme.colors.secondaryDark,
	},
	'.style .token.string': {
		color: theme.colors.secondaryDark,
	},
	variable: {
		color: theme.colors.secondaryDark,
	},
	atrule: {
		color: theme.colors.secondaryLight,
	},
	'attr-value': {
		color: theme.colors.secondaryLight,
	},
	function: {
		color: theme.colors.secondaryLight,
	},
	'class-name': {
		color: theme.colors.secondaryLight,
	},
	keyword: {
		color: theme.colors.secondaryDark,
	},
	regex: {
		color: theme.colors.tertiaryLight,
	},
	important: {
		color: theme.colors.tertiaryLight,
		fontWeight: 'bold',
	},
	bold: {
		fontWeight: 'bold',
	},
	italic: {
		fontStyle: 'italic',
	},
}

export default prism

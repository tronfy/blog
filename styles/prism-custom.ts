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
    color: theme.colors.secondary,
  },
  '.namespace': {
    Opacity: '.7',
  },
  property: {
    color: theme.colors.secondary,
  },
  tag: {
    color: theme.colors.secondary,
  },
  constant: {
    color: theme.colors.secondary,
  },
  symbol: {
    color: theme.colors.secondary,
  },
  deleted: {
    color: theme.colors.secondary,
  },
  number: {
    color: theme.colors.primaryDark,
  },
  boolean: {
    color: theme.colors.secondary,
  },
  selector: {
    color: theme.colors.primary,
  },
  'attr-name': {
    color: theme.colors.primary,
  },
  string: {
    color: theme.colors.primary,
  },
  char: {
    color: theme.colors.primary,
  },
  builtin: {
    color: theme.colors.primary,
  },
  inserted: {
    color: theme.colors.primary,
  },
  operator: {
    color: theme.colors.secondary,
  },
  entity: {
    color: theme.colors.secondary,
    cursor: 'help',
  },
  url: {
    color: theme.colors.secondary,
  },
  '.language-css .token.string': {
    color: theme.colors.secondary,
  },
  '.style .token.string': {
    color: theme.colors.secondary,
  },
  variable: {
    color: theme.colors.secondary,
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
    color: theme.colors.secondary,
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

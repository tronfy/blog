import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: 'Roboto', 'Segoe UI', sans-serif;

  // firefox scrollbar styling
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.primaryDark} ${props =>
  props.theme.colors.background};
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.foreground};

    font-family: 'Roboto', 'Segoe UI', sans-serif;
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
    font-size: 34pt;
    text-shadow: 2px 2px ${props => props.theme.colors.primaryDark};
  }

  h2 {
    font-size: 24pt;
  }

  h3 {
    font-size: 18pt;
  }

  a:not(.nostyle){
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    border-radius: .2em;
    padding-left: .2em;
    padding-right: .2em;

    transition: all ease-out .2s;

    &:hover {
      color: ${props => props.theme.colors.background};
      background: ${props => props.theme.colors.primary};
      text-decoration: none;

      transition: all ease-out .2s;
    }
  }

  .header {
    padding: 0 0 3vh 0;
    text-align: left;
  }

  .post_item {
    text-align: left;
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

  .text {
    text-indent: 1em;
  }

  button {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};

    border-radius: .3em;
    padding: .4em .8em;

    display: inline-flex;
    align-items: center;

    text-transform: uppercase;
    cursor: pointer;

    transition: all ease-out .2s;

    &:hover {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.background};
    }
  }

  ul li {
    list-style: none;
  }

  strong {
    color: ${props => props.theme.colors.secondary};
  }

  td.icon {
    text-align: end;
    width: 1.2em;
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  // scrollbar styling (non-firefox)
  ::-webkit-scrollbar {
    width: .5rem;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primaryDark};
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.primary};
  }

  ::selection {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.background};
  }

  @media (max-width: 865px) {
    .container {
      width: 90vw;
    }
  }

  // fix white flash when reloading development builds on firefox
  @supports (-moz-appearance:none) {
    body {
      display: block;
    }
  }
  `

export default GlobalStyle

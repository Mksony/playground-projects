import { injectGlobal } from 'styled-components';
import { colors, media } from './';
// tslint:disable
const addDefaultStyles = () => injectGlobal`
  html, body {
    max-width: 100%;
    overflow-x: hidden;
  }
  body {
    /* system font https://medium.com/designing-medium/system-shock-6b1dc6d6596f */
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: ${colors.grey.dark};
    overflow-y: scroll; /* has to be scroll, not auto */
    -webkit-overflow-scrolling: touch;
  }

  li, p, a {
    font-size: 1rem;
    line-height: 1.4;
    ${media.sm`
        font-size: 1.1rem;
        line-height: 1.5;
      `}
    ${media.md`
        font-size: 1.2rem;
        line-height: 1.5;
      `}
  }
  h1, .h1 {
    font-size: 2em;
    margin-bottom: .25em;
    line-height: 1.2;
    font-weight: bold;
    ${media.sm`
        font-size: 2.4em;
      `}
    ${media.md`
        font-size: 2.8em;
      `}
  }
  h2, .h2 {
    font-size: 1.8em;
    margin-bottom: .25em;
    line-height: 1.2;
    ${media.sm`
        font-size: 2em;
      `}
    ${media.md`
        font-size: 2.2em;
      `}
  }
  h3, .h3 {
    font-size: 1.6em;
    margin-bottom: .25em;
    line-height: 1.2;
    ${media.sm`
        font-size: 1.8em;
      `}
    ${media.md`
        font-size: 2em;
      `}
  }
  h4, .h4 {
    font-size: 1.4em;
    margin-bottom: .25em;
    line-height: 1.2;
    ${media.sm`
        font-size: 1.6em;
      `}
    ${media.md`
        font-size: 1.8em;
      `}
  }
  h5, .h5 {
    font-size: 1.2em;
    margin-bottom: .25em;
    line-height: 1.2;
    ${media.sm`
        font-size: 1.4em;
      `}
    ${media.md`
        font-size: 1.6em;
      `}
  }
  h6, .h6 {
    font-size: 1.2em;
    margin-bottom: .25em;
    line-height: 1.2;
    ${media.sm`
        font-size: 1.4em;
      `}
    ${media.md`
        font-size: 1.6em;
      `}
  }
  img {
    max-width: 100%;
  }
`;

export default addDefaultStyles;

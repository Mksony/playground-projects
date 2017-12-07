import { css as styledCss } from 'styled-components';

// FIXME: Workaround to make css() work with reduce;
// tslint:disable:no-any
const css = styledCss as (...args: any[]) => void;

const sizes = {
  lg: 1024,
  md: 768,
  sm: 480,
  xs: 0,
};

export interface Media {
  lg: any;
  md: any;
  sm: any;
  xs: any;
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args: string[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {}); // tslint:disable-line

export default media as Media;

import { css as styledCss } from 'styled-components';

// FIXME: Workaround to make css() work with reduce;
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

/* eslint-disable */
// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  /* eslint-disable no-param-reassign */
  accumulator[label] = (...args: any[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
/* eslint-disable */

export default media as Media;

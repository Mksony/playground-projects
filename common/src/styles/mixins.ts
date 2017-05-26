import { Sizes } from 'types';

const formElementFontSizes = {
  small: '.75rem',
  medium: '1.25rem',
  large: '1.5rem',
  default: '1rem',
};

export function getFormElementDimensions(size: Sizes) {
  return `
    font-size: ${formElementFontSizes[size]}
    line-height: 1.5;
    height: 2.25em;
    padding-bottom: calc(0.375em - 1px);
    padding-left: calc(0.625em - 1px);
    padding-right: calc(0.625em - 1px);
    padding-top: calc(0.375em - 1px);
  `;
}

export function getIconPadding(iconLeft: string | undefined, iconRight: string | undefined): string {
  let iconPadding = '';
  const PADDING = '2.25em';
  if (iconLeft) {
    iconPadding += `padding-left: ${PADDING};`;
  }
  if (iconRight) {
    iconPadding += `padding-right: ${PADDING};`;
  }
  return iconPadding;
}

import * as React from 'react';
import styled from 'styled-components';
import { DefaultColors } from 'types';

import { colors } from '../../styles';

export interface TagProps {
  text?: string;
  color: DefaultColors;
  className?: string;
}

const resolveColor = ({ color }: TagProps) => (`
  background-color: ${colors[color]};
`)

const Tag: React.SFC<TagProps> = ({ text, className }) => (
  <span className={className} >{text}</span>
)

const StyledTag = styled(Tag) `
    ${resolveColor}
    color: white;
    border-radius: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    height: 2em;
    line-height: 1.5;
    padding-left: 0.875em;
    padding-right: 0.875em;
    white-space: nowrap;
`;

export default StyledTag;

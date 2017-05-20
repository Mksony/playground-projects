import * as React from 'react';
import styled from 'styled-components';
import { DefaultColors } from 'types';

import Tag from '../tag/Tag';

export interface QuoteProps {
  text?: string;
  author?: string;
  tags?: string[];
  tagColor?: DefaultColors;
  className?: string;
}

const TagWrapper = styled.p`
  & > * {
    margin-right: .5em;
  }
   & > *:last-child{
        margin: 0;
  }
`;

const Quote: React.SFC<QuoteProps> = ({
  text,
  author,
  tags,
  tagColor = 'primary',
  className,
}) => (
    <blockquote className={className}>
      <p className="h1">
        {text}
      </p>
      <p className="h3">
        {author}
      </p>
      {tags &&
        (
          <TagWrapper>
            {tags.map(tag => <Tag text={tag} color={tagColor} />)}
          </TagWrapper>
        )}
    </blockquote>
  );

const StyledQuote = styled(Quote) `
    background-color: rgba(235, 235, 235, .3);
    border-left: 5px solid;
    padding: 1.25em 1.5em;
`;

export default StyledQuote;

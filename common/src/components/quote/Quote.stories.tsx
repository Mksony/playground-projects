import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import Quote from './Quote';

storiesOf('Quote', module)
  .add('Default', () => {
    return (
      <Quote
        text="To be or not to be"
        author="William Shakespeare"
        tags={['literature', 'english', 'test']}
      />
    );
  });

import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import Tag from './Tag';

storiesOf('Tag', module)
  .add('Default', () => {
    return (
      <Tag
        text="English"
        color="primary"
      />
    );
  });

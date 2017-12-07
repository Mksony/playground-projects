import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from './Tag';

storiesOf('Tag', module).add('Default', () => {
  return <Tag text="English" color="primary" />;
});

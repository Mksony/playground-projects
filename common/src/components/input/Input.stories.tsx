import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from './Input';

storiesOf('Input', module)
  .add('Default', () => (
    <Input placeholder="Enter Input" />
  ))
  .add('Available sizes', () => (
    <div>
      <Input size="small" placeholder="Enter Input" />
      <Input size="default" placeholder="Enter Input" />
      <Input size="medium" placeholder="Enter Input" />
      <Input size="large" placeholder="Enter Input" isLoading />
    </div>
  ))
  .add('with left icon', () => (
    <Input placeholder="Enter Input" iconLeft="search" />
  ))
  .add('with right icon', () => (
    <Input placeholder="Enter Input" iconRight="checkmark" />
  ))
  .add('loading', () => (
    <Input placeholder="Enter Input" isLoading />
  ))
  ;

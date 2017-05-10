import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from './Input';

storiesOf('Input', module)
  .add('Default', () => (
    <Input placeholder="Enter Input"/>
  ))
  .add('Available sizes', () => (
    <div>
      <Input size="small" placeholder="Enter Input">
        Click me
      </Input>
      <Input size="default" placeholder="Enter Input">
        Click me
      </Input>
      <Input size="medium" placeholder="Enter Input">
        Click me
      </Input>
      <Input size="large" placeholder="Enter Input">
        Click me
      </Input>
    </div>
  ))

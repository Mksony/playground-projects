import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './Button';

storiesOf('Button', module)
  .add('Default', () => (
    <Button color="primary" label="Click me" />
  ))
  .add('Available sizes', () => (
    <div>
      <Button size="small" color="primary" label="Click me" />
      <Button size="default" color="primary" label="Click me" />
      <Button size="medium" color="primary" label="Click me" />
      <Button size="large" color="primary" label="Click me" />
    </div>
  ))
  .add('Available colors', () => (
    <div>
      <div>
        <Button color="primary" label="Click me" />
        <Button color="secondary" label="Click me" />
        <Button color="succes" label="Click me" />
        <Button color="warning" label="Click me" />
        <Button color="danger" label="Click me" />
      </div>
    </div>
  ))
  .add('Ghost', () => (
    <Button color="primary" ghost label="Click Me" />
  ));

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';
import Container from '../layout/Container';

const CenterContainer = (storyFn: any) => (
  <Container>{storyFn()}</Container>
);

storiesOf('Button', module)
  .add('Default', withInfo('description or documentation about my component, supports markdown')(
    () => (
    <Button color="primary" label="Click me" />
  )))
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

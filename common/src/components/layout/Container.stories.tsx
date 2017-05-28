import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import Container from './Container';

storiesOf('Container', module)
  .add('full height', () => (
    <Container fullHeight bgColor="hotpink" />
  ))
  .add('centered content', () => (
    <Container center fullHeight bgColor="hotpink">
      <h1>Headline</h1>
    </Container>
  ))
  .add('no padding', () => (
    <Container compact center fullHeight bgColor="hotpink">
      <Container center fullHeight bgColor="hotpink">
        <h1>Headline</h1>
      </Container>
      <Container center fullHeight bgColor="hotpink">
        <h1>Headline</h1>
      </Container>
    </Container>
  ));

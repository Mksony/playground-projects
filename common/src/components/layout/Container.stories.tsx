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
  ))
  .add('with background image', () => (
    <Container
      compact
      center
      fullHeight
      backgroundUrl="https://unsplash.it/1920/1080">
      <h1>Hello</h1>
    </Container>
  ))
  .add('with background image and color', () => (
    <Container
      compact
      center
      fullHeight
      backgroundUrl="https://unsplash.it/1920/1080"
      bgColor="rgba(146, 255, 255, 0.6)"
    >
      <h1>Hello</h1>
    </Container>
  ));

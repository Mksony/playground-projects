import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { CardContent } from './Card';
import { Card, CardHeader, ImageCard } from './';
import Container from '../layout/Container';

storiesOf('Card', module)
  .add('Default color', () => {
    return (
      <Container maxWidth={600} hCenter bgColor="hotpink">
        <Card>
          <CardContent>
            <p>Test</p>
          </CardContent>
        </Card>
      </Container>
    );
  })
  .add('Custom color', () => {
    return (
      <Container maxWidth={600} hCenter bgColor="hotpink">
        <Card bgColor="rgba(255, 255, 255, .6)">
          <CardContent>
            <p>Test</p>
          </CardContent>
        </Card>
      </Container>
    );
  })
  .add('With Header', () => {
    return (
      <Container maxWidth={600} hCenter bgColor="hotpink">
        <Card bgColor="rgba(255, 255, 255, .6)">
          <CardHeader title="Hello World"/>
          <CardContent>
            <p>Lorem ipsum dolor sit amet, mea paulo maluisset cu,
              ne eum congue possim, quo ipsum munere reprehendunt in.
              Atqui alienum persequeris at eam. Iusto persius scripserit ad</p>
          </CardContent>
        </Card>
      </Container>
    );
  })
  .add('ImageCard', () => {
    return (
      <Container maxWidth={600} hCenter bgColor="hotpink">
        <ImageCard
          imgSrc="http://via.placeholder.com/1920x1080"
          altText="sampleImage"
        >
          <p>test</p>
        </ImageCard>
      </Container>
    );
  });

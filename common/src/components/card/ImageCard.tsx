import * as React from 'react';
import { StyledComponentClass } from 'styled-components';

import { Card, CardContent } from './';

export interface ImageCardProps {
  imgSrc: string;
  altText: string;
  bgColor?: string;
}

const ImageCard: React.SFC<ImageCardProps> = ({
  altText,
  imgSrc,
  bgColor,
  children,
}) => (
  <Card bgColor={bgColor}>
    <img src={imgSrc} alt={altText} />
    <CardContent>{children}</CardContent>
  </Card>
);

ImageCard.defaultProps = {
  bgColor: 'white',
};

export default ImageCard;

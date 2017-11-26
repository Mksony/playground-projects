/// <reference types="react" />
import * as React from 'react';
export interface ImageCardProps {
    imgSrc: string;
    altText: string;
    bgColor?: string;
}
declare const ImageCard: React.SFC<ImageCardProps>;
export default ImageCard;

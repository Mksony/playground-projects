/// <reference types="react" />
import * as React from 'react';
import { DefaultColors } from 'types';
export interface TagProps {
    text?: string;
    color: DefaultColors;
    className?: string;
}
declare const StyledTag: React.ComponentClass<TagProps & {
    theme?: any;
    innerRef?: ((instance: any) => void) | undefined;
}>;
export default StyledTag;

/// <reference types="react" />
import * as React from 'react';
import { DefaultColors } from 'types';
export interface QuoteProps {
    text?: string;
    author?: string;
    tags?: string[];
    tagColor?: DefaultColors;
    className?: string;
}
declare const StyledQuote: React.ComponentClass<QuoteProps & {
    theme?: any;
    innerRef?: ((instance: any) => void) | undefined;
}>;
export default StyledQuote;

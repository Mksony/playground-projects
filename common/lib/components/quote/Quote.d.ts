import { StyledComponentClass } from 'styled-components';
import { DefaultColors } from 'types';
export interface QuoteProps {
    text?: string;
    author?: string;
    tags?: string[];
    tagColor?: DefaultColors;
    className?: string;
}
declare const StyledQuote: StyledComponentClass<QuoteProps, any, QuoteProps>;
export default StyledQuote;

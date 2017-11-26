import { StyledComponentClass } from 'styled-components';
import { DefaultColors } from 'types';
export interface QuoteProps {
    text?: string;
    author?: string;
    tags?: string[];
    tagColor?: DefaultColors;
    className?: string;
}
declare const StyledQuote: StyledComponentClass<QuoteProps, any, Pick<QuoteProps, "text" | "className" | "author" | "tags" | "tagColor"> & {
    theme?: any;
}>;
export default StyledQuote;

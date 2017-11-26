import { StyledComponentClass } from 'styled-components';
import { DefaultColors } from 'types';
export interface TagProps {
    text?: string;
    color: DefaultColors;
    className?: string;
}
declare const StyledTag: StyledComponentClass<TagProps, any, Pick<TagProps, "text" | "className" | "color"> & {
    theme?: any;
}>;
export default StyledTag;

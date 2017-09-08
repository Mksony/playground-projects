import { StyledComponentClass } from 'styled-components';
import { DefaultColors } from 'types';
export interface TagProps {
    text?: string;
    color: DefaultColors;
    className?: string;
}
declare const StyledTag: StyledComponentClass<TagProps, any, TagProps>;
export default StyledTag;

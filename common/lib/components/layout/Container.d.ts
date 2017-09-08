import { StyledComponentClass } from 'styled-components';
export interface ChildContainerProps {
    fluid?: boolean;
    textCenter?: boolean;
    maxWidth?: number;
    className?: string;
}
export interface BaseContainerProps extends ChildContainerProps {
    className?: string;
    center?: boolean;
    vCenter?: boolean;
    hCenter?: boolean;
    fullHeight?: boolean;
    textColor?: string;
    bgColor?: string;
    backgroundUrl?: string;
    compact?: boolean;
}
declare const StyledContainer: StyledComponentClass<BaseContainerProps, any, BaseContainerProps>;
export default StyledContainer;

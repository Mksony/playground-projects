import * as React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';
import { media } from '../../styles';

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

const ChildContainer: React.SFC<ChildContainerProps> = props => (
  <div className={props.className}>{props.children}</div>
);

const StyledChildContainer = styled(ChildContainer)`
  max-width: ${props =>
    props.fluid ? '100%' : `${props.maxWidth}px` || '1200px'};
  width: 100%;
  text-align: ${props => (props.textCenter ? 'center' : 'left')};
`;
const BaseContainer: React.SFC<BaseContainerProps> = ({
  className,
  fluid,
  textCenter,
  maxWidth,
  children,
}) => (
  <div className={className}>
    <StyledChildContainer
      fluid={fluid}
      textCenter={textCenter}
      maxWidth={maxWidth}
    >
      {children}
    </StyledChildContainer>
  </div>
);

const getCenterStyles = (props: BaseContainerProps) => {
  const verticalCenter = 'align-items: center;';
  const horizontalCenter = 'justify-content: center;';
  if (props.center) {
    return `
      display: flex;
      ${horizontalCenter}
      ${verticalCenter}
    `;
  } else if (props.vCenter) {
    return `
      display: flex;
      ${verticalCenter}
    `;
  } else if (props.hCenter) {
    return `
      display: flex;
      ${horizontalCenter}
    `;
  }
  return '';
};

const resolveBackground = ({ bgColor, backgroundUrl }: BaseContainerProps) => {
  let backgroundColor = 'linear-gradient(transparent, transparent)';
  let url = '';
  if (bgColor) {
    backgroundColor = `linear-gradient(${bgColor}, ${bgColor})`;
  }
  if (backgroundUrl) {
    url = `, url(${backgroundUrl}) no-repeat center / cover`;
  }
  return `background: ${backgroundColor}${url};`;
};
// prettier-ignore
const StyledContainer = styled(BaseContainer)`
  position: relative;
  color: ${props => (props.textColor ? props.textColor : 'inherit')};
  min-height: ${props => (props.fullHeight ? '100vh' : 'initial')};
  ${getCenterStyles} ${resolveBackground} padding: 20px 10px;
  ${media.sm`
    padding: 30px 20px;
  `}
  ${media.md`
    padding: 50px 30px;
  `}
  ${media.lg`
    padding: 70px 40px;
  `}
  ${({ compact }) => compact ? css`padding: 0px !important;` : ''}
`;

export default StyledContainer;

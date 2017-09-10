import * as React from 'react';
import styled from 'styled-components';

export interface CardProps {
  className?: string;
  bgColor?: string;
}

const BaseCard: React.SFC<CardProps> = ({
  children,
  className,
}) => (<div className={className}>{children}</div>);

const Card = styled(BaseCard) `
  border-radius: 3px;
  background-color: ${({ bgColor }) => bgColor as string};
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  max-width: 100%;
  position: relative;
  overflow: hidden;
`;

Card.defaultProps = {
  bgColor: 'white',
};

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export default Card;

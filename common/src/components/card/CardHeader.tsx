import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';

export interface CardHeaderProps {
  className?: string;
  component?: any;
  bordered?: string;
  title: string;
}

export interface CardContentProps {
  className?: string;
}

const BaseCardContent: React.SFC<CardContentProps> = ({
  children,
  className,
}) => (<div className={className}>{children}</div>);

export const CardContent = styled(BaseCardContent) `
  padding: 1.5rem;
`;

const BaseCardTitle = styled.p`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const BaseCardHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${colors.grey.light};
`;

export const CardHeader: React.SFC<CardHeaderProps> = ({
  component,
  bordered,
  title,
}) => {
  const Title = BaseCardTitle.withComponent(component);
  return (
    <BaseCardHeader>
      <Title>{title}</Title>
    </BaseCardHeader>
  );
};

CardHeader.defaultProps = {
  component: 'p',
};

export default CardHeader;

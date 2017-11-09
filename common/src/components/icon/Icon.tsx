import * as React from 'react';
import styled, { keyframes } from 'styled-components';

export type ClickHandler = (e: React.SyntheticEvent<HTMLElement>) => void;

interface AvailableIconSets {
  'Material Design Icons': string;
  FontAwesome: string;
  Typicons: string;
  'Github Octicons': string;
  Ionicons: string;
}
const iconSets: AvailableIconSets = {
  'Material Design Icons': 'md',
  FontAwesome: 'fa',
  Typicons: 'ti',
  'Github Octicons': 'go',
  Ionicons: 'io',
};

interface BaseIconProps {
  iconSet: keyof AvailableIconSets;
}

export interface IconProps {
  name: string;
  className?: string;
  onClick?: ClickHandler;
}

const BaseIcon: React.SFC<BaseIconProps & IconProps> = ({ iconSet, name, className, onClick }) => {
  const iconSetFolder = iconSets[iconSet];
  const ReactIcon = require(`react-icons/lib/${iconSetFolder}/${name}`);
  return (
    <i className={className} onClick={onClick}>
      {React.createElement(ReactIcon as React.ComponentClass)}
    </i>
  );
};

const StyledBaseIcon = styled(BaseIcon) `
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

export const IonicIcon: React.SFC<IconProps> = ({ name, className, onClick }) => {
  return (
    <StyledBaseIcon
      iconSet="Ionicons"
      name={name}
      className={className}
      onClick={onClick}
    />
  );
};

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const BaseLoadingIcon: React.SFC<{ className?: string; }> = ({
  className,
}) => (<IonicIcon name="load-d" className={className} />);

const BaseCloseIcon: React.SFC<{ className?: string; onClick: ClickHandler }> = ({
  className,
  onClick,
}) => (
    <IonicIcon
      name="close-circled"
      className={className}
      onClick={onClick}
    />
  );

export const CloseIcon = styled(BaseCloseIcon) `
  cursor: pointer;
`;

export const LoadingIcon = styled(BaseLoadingIcon) `
  animation: ${rotate360} 1.25s linear infinite;
`;

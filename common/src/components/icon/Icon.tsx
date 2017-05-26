import * as React from 'react';
import styled, { keyframes } from 'styled-components';

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

interface IconProps {
  name: string;
  className?: string;
}

const BaseIcon: React.SFC<BaseIconProps & IconProps> = ({ iconSet, name, className }) => {
  const iconSetFolder = iconSets[iconSet];
  const ReactIcon = require(`react-icons/lib/${iconSetFolder}/${name}`);
  return (
    <i className={className} >
      <ReactIcon />
    </i>
  );
};

export const IonicIcon: React.SFC<IconProps> = ({ name, className }) => {
  return (
    <BaseIcon iconSet="Ionicons" name={name} className={className} />
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

export const LoadingIcon = styled(BaseLoadingIcon) `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate360} 1.25s linear infinite;
`;

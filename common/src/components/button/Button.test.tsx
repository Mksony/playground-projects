import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from './Button';

it('renders without crashing', () => {
  const button = shallow(<Button />);
  expect(button).toHaveProp('size', 'default');
});
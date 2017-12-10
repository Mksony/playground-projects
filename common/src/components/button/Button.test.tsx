import * as React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

it('renders without crashing', () => {
  const button = shallow(<Button label="Click me" />);
  expect(button).toHaveProp('size', 'default');
});

it('calls onClick function correctly', () => {
  const clicked = jest.fn();
  const button = shallow(<Button label="Click me" onClick={clicked} />);
  button.simulate('click');
  expect(clicked).toHaveBeenCalledTimes(1);
});

it('renders an anchor tag', () => {
  const button = shallow(<Button label="Click me" component="a" />);
  expect(button.dive().type()).toEqual('a');
});

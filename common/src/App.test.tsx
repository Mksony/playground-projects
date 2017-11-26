import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
describe('<App />', () => {
  it('renders', () => {
    const app = shallow(<App />);
    expect(app).toBePresent();
  });
});

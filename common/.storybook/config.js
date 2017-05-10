import { configure } from '@kadira/storybook';

import { resetStyles, sanitizeStyles, addDefaultStyles } from '../src/styles';

sanitizeStyles();
resetStyles();
addDefaultStyles();

const req = require.context('../src/components', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);

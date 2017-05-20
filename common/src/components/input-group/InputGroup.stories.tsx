import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import InputGroup from './InputGroup';

storiesOf('InputGroup', module)
  .add('Default', () => {
    return (
      <InputGroup
        buttonLabel="Click Me"
        placeholder="Enter Input"
      />
    );
  })
  .add('Available Sizes', () => {
    return (
      <div>
        <InputGroup
          buttonLabel="Click Me"
          placeholder="Enter Input"
          size="small"
        />
        <InputGroup
          buttonLabel="Click Me"
          placeholder="Enter Input"
          size="default"
        />
        <InputGroup
          buttonLabel="Click Me"
          placeholder="Enter Input"
          size="medium"
        />
        <InputGroup
          buttonLabel="Click Me"
          placeholder="Enter Input"
          size="large"
        />
      </div>
    );
  })
  .add('Default', () => {
    return (
      <InputGroup
        buttonLabel="Click Me"
        placeholder="Enter Input"
      />
    );
  });

import React from 'react';
import { storiesOf, /* action */ } from '@kadira/storybook';

/*
import React Components for styling purposes without
business/application logic
*/

import SampleStory from '../sampleStory';
import InputBox from '../atoms/inputBox';

storiesOf('Inputbox', module)
  .add('Basic Layout', () => (
    <InputBox placeholder="Type text in here" />
  ));

storiesOf('SampleStory Component', module)
  .add('Basic Layout', () => (
    <SampleStory />
  ));

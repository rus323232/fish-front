import * as React from 'react';

// import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
// import { wInfo } from 'src/utils/wInfo';
import LandingContent from '../components/LandingContent';

(storiesOf('Landing Components', module) as any).add('LandingContent in landing page', () => (
  <LandingContent />
));

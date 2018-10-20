import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { wInfo } from 'src/utils/wInfo';
import { AddButton } from '../Button';

(storiesOf('Shared Components', module) as any).add(
  'basic PrimaryButton',
  wInfo(`
  ### Usage
  ~~~js
  <Button
    title="Enroll"
    onClick={this.handleClick}
  />
  ~~~

`)(() => <AddButton title={text('title', 'Enroll')} onClick={action('hello there')} />)
);

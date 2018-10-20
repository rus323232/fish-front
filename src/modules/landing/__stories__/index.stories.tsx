import * as React from 'react';

// import { action } from '@storybook/addon-actions';
// import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { wInfo } from 'src/utils/wInfo';
import Header from '../components/Header';

(storiesOf('Landing Components', module) as any).add(
  'Header in landing page',
  wInfo(`

    ### Usage
    ~~~js
    <Header />
    ~~~

  `)(() => (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  ))
);

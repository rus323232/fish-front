import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';

describe('Test Render APP Contaner component', () => {
  const AppComponent = shallow(
    <App
      isAuth={false}
      errorLog=""
      successLog=""
      hideError={() => {}}
      hideSuccess={() => {}}
    />
  );
  it('render components in depth = 0', () => {
    expect(AppComponent.find('Switch').length).toEqual(1);
  });
});

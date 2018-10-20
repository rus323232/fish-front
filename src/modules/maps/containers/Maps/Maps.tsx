import * as React from 'react';
import Header from '../../components/Header';

export interface IMapsProps {}

export default class Maps extends React.Component<IMapsProps, any> {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <div>
          здесь будут карты
        </div>
      </React.Fragment>
    );
  }
}

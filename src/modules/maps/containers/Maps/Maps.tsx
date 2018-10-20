import * as React from 'react';
import Header from '../../components/Header';
import Helmet from 'react-helmet';

export interface IMapsProps {}

export default class Maps extends React.Component<IMapsProps, any> {
  public render() {
    return (
      <React.Fragment>
        <Helmet title="Рыба здесь!" />
        <Header />
        <div>здесь будут карты</div>
      </React.Fragment>
    );
  }
}

import * as React from 'react';
import Header from 'src/sharedComponents/PublicHeader';
import LandingContent from '../../components/LandingContent';
import Helmet from 'react-helmet';

export interface ILandingProps {}

export default class Landing extends React.Component<ILandingProps, any> {
  public render() {
    return (
      <React.Fragment>
        <Helmet title="Рыбная карта" />
        <Header />
        <LandingContent />
      </React.Fragment>
    );
  }
}

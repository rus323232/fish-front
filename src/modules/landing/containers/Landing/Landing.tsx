import Header from '../../components/Header';
import * as React from 'react';
import LandingContent from '../../components/LandingContent';

export interface ILandingProps {}

export default class Landing extends React.Component<ILandingProps, any> {
  public render() {
    return (
      <React.Fragment>
        <Header />
        <LandingContent />
      </React.Fragment>
    );
  }
}

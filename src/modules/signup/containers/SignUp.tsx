import * as React from 'react';
import Header from 'src/sharedComponents/PublicHeader';
import Helmet from 'react-helmet';

export interface ISignUpProps {}

export default class SignUp extends React.Component<ISignUpProps, any> {
  public render() {
    return (
      <React.Fragment>
        <Helmet title="Регистрация" />
        <Header />
        <div>страница регистрации</div>
      </React.Fragment>
    );
  }
}

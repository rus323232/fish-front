import * as React from 'react';
import Header from 'src/sharedComponents/PublicHeader';
import Helmet from 'react-helmet';
import AuthForm from '../../components/AuthForm';

export interface ISignInProps {}

export default class ISignIn extends React.Component<ISignInProps, any> {
  public render() {
    return (
      <React.Fragment>
        <Helmet title="Авторизация" />
        <Header />
        <AuthForm />
      </React.Fragment>
    );
  }
}

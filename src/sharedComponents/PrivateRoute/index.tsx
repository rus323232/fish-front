import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

export interface IPublicRouteProps extends RouteProps {
  isAuth: boolean;
}

export default class PrivateRoute extends React.Component<IPublicRouteProps, any> {
  public render() {
    const { isAuth, ...props } = this.props;
    return isAuth ? <Route {...props} /> : <Redirect to="/" />;
  }
}

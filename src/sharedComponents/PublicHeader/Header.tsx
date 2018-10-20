import * as React from 'react';
import { Link, Route } from 'react-router-dom';

const s = require('./header.scss');

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps, any> {
  renderSignInLink = () => {
    return <Link to="/signin">Войти</Link>;
  };

  renderSignUpLink = () => {
    return <Link to="/signup">Зарегистрироваться</Link>;
  };

  public render() {
    return (
      <header className={s.header}>
        <Link to="/">Там, где водится рыба</Link>
        <div>
          <Route exact path="/" render={this.renderSignInLink} />
          <Route exact path="/signup" render={this.renderSignInLink} />
          <Route path="/signin" render={this.renderSignUpLink} />
        </div>
      </header>
    );
  }
}

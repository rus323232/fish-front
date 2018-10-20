import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps, any> {
  public render() {
    return (
      <header>
        <Link to="/">Там где водится рыба</Link>
        <div>
          <Link to="/signin">Войти</Link>
          <Link to="/signup">Регистрация</Link>
        </div>
      </header>
    );
  }
}
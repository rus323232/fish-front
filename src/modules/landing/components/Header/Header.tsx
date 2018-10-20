import * as React from 'react';
import { Link } from 'react-router-dom';

const s = require('./header.scss');

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps, any> {
  public render() {
    return (
      <header className={s.header}>
        <Link to="/">Там, где водится рыба</Link>
        <div>
          <Link to="/signin">Войти</Link>
        </div>
      </header>
    );
  }
}

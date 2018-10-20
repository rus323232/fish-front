import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps, any> {
  public render() {
    return (
      <header>
        <Link to="/lk">ЛК</Link>
        Шапка для авторизованной страницы
      </header>
    );
  }
}

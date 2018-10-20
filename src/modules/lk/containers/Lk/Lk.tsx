import * as React from 'react';
import Helmet from 'react-helmet';

export interface ILkProps {}

export default class Lk extends React.Component<ILkProps, any> {
  public render() {
    return (
      <div>
        <Helmet title="Личный кабинет - Рыбные карты" />
        авторизованная страница личного кабинета
      </div>
    );
  }
}

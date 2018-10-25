import * as React from 'react';

const s = require('./landingContent.scss');

export interface ILandingContentProps {}

export default class LandingContent extends React.Component<ILandingContentProps, any> {
  public render() {
    return (
      <div className={s.landing}>
        <div className={s.landing__header}>
          <h1>Карта рыбных мест</h1>
          <p>Подскажем где водится рыба</p>
        </div>
        <div className={s.landing__promo}>Здесь будет промо блок</div>
        <div className={s.landing__promo}>Здесь будет ещё один промо блок</div>
        <div className={s.landing__promo}>Здесь будет ещё один промо блок</div>
      </div>
    );
  }
}

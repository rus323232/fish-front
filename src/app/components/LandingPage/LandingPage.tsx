import * as React from 'react';

export interface ILandingPageProps {}

export default class LandingPage extends React.Component<ILandingPageProps, any> {
  public render() {
    return (
      <div>
        <header>Здесь будет хедер</header>
        <main>Здесь будет основная часть</main>
        <footer>Здесь будет футер</footer>
      </div>
    );
  }
}

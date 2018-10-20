import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Switch, Route, Redirect } from 'react-router';
import * as NotificationSystem from 'react-notification-system';
import Landing from 'src/modules/landing';
import Maps from 'src/modules/maps';
import Lk from 'src/modules/Lk';
import SignIn from 'src/modules/signin';
import SignUp from 'src/modules/signup';
import PrivateRoute from 'src/sharedComponents/PrivateRoute';
import { hideError, hideSuccess } from './duck';
import * as S from './selectors';
import { IStore } from 'src/core/reducers/interfaces';
import { IAppMapState, IAppMapDispatch } from './interfaces';

import 'src/globalStyles/styles.scss';

const mapStateToProps = (store: IStore): IAppMapState => ({
  errorLog: S.getError(store),
  successLog: S.getSuccess(store),
  isAuth: S.getIsAuth(store),
});

const mapDispatchToProps = (dispatch): IAppMapDispatch =>
  bindActionCreators(
    {
      hideError,
      hideSuccess,
    },
    dispatch
  );

type IAppProps = IAppMapState & IAppMapDispatch;

export class App extends React.Component<IAppProps, any> {
  noty;

  noteRef = ref => {
    this.noty = ref;
  };

  componentDidUpdate(prevProps: IAppProps) {
    const { errorLog, successLog } = this.props;
    if (prevProps.errorLog !== errorLog && !!errorLog) {
      this.noty.addNotification({
        message: this.props.errorLog,
        level: 'error',
        onRemove: () => this.props.hideError(),
      });
    }

    if (prevProps.successLog !== successLog && !!successLog) {
      this.noty.addNotification({
        message: this.props.successLog,
        level: 'success',
        onRemove: () => this.props.hideSuccess(),
      });
    }
  }

  public render() {
    const { isAuth } = this.props;
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={isAuth ? Maps : Landing} />
          <PrivateRoute path="/signin" isAuth={!isAuth} component={SignIn} />
          <PrivateRoute path="/signup" isAuth={!isAuth} component={SignUp} />
          <PrivateRoute path="/lk" isAuth={isAuth} component={Lk} />
          <Redirect to="/" />
        </Switch>
        <NotificationSystem ref={this.noteRef} />
      </React.Fragment>
    );
  }
}

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

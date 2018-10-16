import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router';
import * as NotificationSystem from 'react-notification-system';
import LandingPage from '../../components/LandingPage';
import { hideError, hideSuccess } from './duck';
import * as S from './selectors';
import { IStore } from 'src/core/reducers/interfaces';
import { IAppMapState, IAppMapDispatch } from './interfaces';

const mapStateToProps = (store: IStore): IAppMapState => ({
  errorLog: S.getError(store),
  successLog: S.getSuccess(store),
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
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={LandingPage} />
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

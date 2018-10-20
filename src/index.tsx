import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './app';
import { configureStore } from './core/configureStore';
import saga from './core/sagas';

const store = configureStore();
store.runSaga(saga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

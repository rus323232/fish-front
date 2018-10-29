import { combineReducers, Reducer } from 'redux';
import { handleActions, createActions, createAction } from 'redux-actions';
import { IAppReducer } from './interfaces';

// Actions
export const SHOW_ERROR = 'SHOW_ERROR';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const HIDE_ERROR = 'HIDE_ERROR';
export const HIDE_SUCCESS = 'HIDE_SUCCESS';

export const LOGIN = 'app/LOGIN';
export const LOGOUT = 'app/LOGOUT';

const errors: Reducer<string> = handleActions<string>(
  {
    [SHOW_ERROR]: (state, action) => action.payload,
    [HIDE_ERROR]: () => '',
  },
  ''
);

const success: Reducer<string> = handleActions<string>(
  {
    [SHOW_SUCCESS]: (state, action) => action.payload,
    [HIDE_SUCCESS]: () => '',
  },
  ''
);

const isAuthed: Reducer<boolean> = handleActions<boolean>(
  {
    [LOGIN]: () => true,
    [LOGOUT]: () => false,
  },
  false
);

const reducer: Reducer<IAppReducer> = combineReducers<IAppReducer>({
  errors,
  success,
  isAuthed,
});

export default reducer;

// Noty Action Creators

export const { showError, showSuccess, hideError, hideSuccess } = createActions({
  [SHOW_ERROR]: i => i,
  [SHOW_SUCCESS]: i => i,
  [HIDE_ERROR]: undefined,
  [HIDE_SUCCESS]: undefined,
});

export const login = createAction(LOGIN);
export const logout = createAction(LOGOUT);

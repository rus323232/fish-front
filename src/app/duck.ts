import { combineReducers } from 'redux';
import { createAction } from 'redux-actions';
import { IAppReducer } from './interfaces';

// Actions
export const SHOW_ERROR = 'SHOW_ERROR';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const HIDE_ERROR = 'HIDE_ERROR';
export const HIDE_SUCCESS = 'HIDE_SUCCESS';

export const LOGIN = 'app/LOGIN';
export const LOGOUT = 'app/LOGOUT';

const errors = (state = '', action): string => {
  switch (action.type) {
    case SHOW_ERROR:
      return action.payload;
    case HIDE_ERROR:
      return '';
    default:
      return state;
  }
};

const success = (state = '', action): string => {
  switch (action.type) {
    case SHOW_SUCCESS:
      return action.payload;
    case HIDE_SUCCESS:
      return '';
    default:
      return state;
  }
};

const isAuthed = (state = true, action): boolean => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

const reducer = combineReducers<IAppReducer>({
  errors,
  success,
  isAuthed,
});

export default reducer;

// Noty Action Creators

export const showError = createAction<string>(SHOW_ERROR);

export const showSuccess = createAction<string>(SHOW_SUCCESS);

export const hideError = createAction(HIDE_ERROR);

export const hideSuccess = createAction(HIDE_SUCCESS);

import { combineReducers } from 'redux';
import { createAction } from 'redux-actions';
import { IAppReducer } from './interfaces';

// Actions
export const SHOW_ERROR = 'SHOW_ERROR';
export const SHOW_SUCCESS = 'SHOW_SUCCESS';
export const HIDE_ERROR = 'HIDE_ERROR';
export const HIDE_SUCCESS = 'HIDE_SUCCESS';

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

const reducer = combineReducers<IAppReducer>({
  errors,
  success,
});

export default reducer;

// Noty Action Creators

export const showError = createAction<string>(SHOW_ERROR);

export const showSuccess = createAction<string>(SHOW_SUCCESS);

export const hideError = createAction(HIDE_ERROR);

export const hideSuccess = createAction(HIDE_SUCCESS);

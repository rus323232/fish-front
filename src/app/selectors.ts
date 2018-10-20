import { createSelector } from 'reselect';
import { IAppReducer } from 'src/app/interfaces';
import { IStore } from 'src/core/reducers/interfaces';

const appReducer = (store: IStore): IAppReducer => store.app;

export const getError = createSelector(appReducer, i => i.errors);
export const getSuccess = createSelector(appReducer, i => i.success);
export const getIsAuth = createSelector(appReducer, i => i.isAuthed);

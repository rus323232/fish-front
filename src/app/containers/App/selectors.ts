import { createSelector } from 'reselect';
import { IAppReducer } from 'src/app/containers/App/interfaces';
import { IStore } from 'src/core/reducers/interfaces';

const appReducer = (store: IStore): IAppReducer => store.app;

export const getError = createSelector(appReducer, i => i.errors);
export const getSuccess = createSelector(appReducer, i => i.success);

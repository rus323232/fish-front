export interface IAppReducer {
  errors: string;
  success: string;
  isAuthed: boolean;
}

export interface IAppMapState {
  errorLog: string;
  successLog: string;
  isAuth: boolean;
}

export interface IAppMapDispatch {
  hideError: () => void;
  hideSuccess: () => void;
}

export interface IAppReducer {
  errors: string;
  success: string;
}

export interface IAppMapState {
  errorLog: string;
  successLog: string;
}

export interface IAppMapDispatch {
  hideError: () => void;
  hideSuccess: () => void;
  showError: (data: string) => void;
}

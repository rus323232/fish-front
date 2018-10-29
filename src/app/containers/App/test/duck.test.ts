import reducer, * as duck from '../duck';

describe('Test action creators App', () => {
  it('noty actions', () => {
    const testMsg = 'test message';
    expect(duck.showError(testMsg)).toEqual({ type: duck.SHOW_ERROR, payload: testMsg });
    expect(duck.hideError()).toEqual({ type: duck.HIDE_ERROR });
    expect(duck.showSuccess(testMsg)).toEqual({ type: duck.SHOW_SUCCESS, payload: testMsg });
    expect(duck.hideSuccess()).toEqual({ type: duck.HIDE_SUCCESS });
    expect(duck.login()).toEqual({ type: duck.LOGIN });
    expect(duck.logout()).toEqual({ type: duck.LOGOUT });
  });
});

describe('Test app reducer', () => {
  const errMsg = 'test message';

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'Unused_Action' })).toEqual({
      errors: '',
      success: '',
      isAuthed: false,
    });
  });

  it('should return the error msg', () => {
    expect(reducer(undefined, duck.showError(errMsg))).toEqual({
      errors: errMsg,
      success: '',
      isAuthed: false,
    });
  });

  it('should return the success msg', () => {
    expect(reducer(undefined, duck.showSuccess(errMsg))).toEqual({
      errors: '',
      success: errMsg,
      isAuthed: false,
    });
  });

  it('should hide the error msg', () => {
    expect(
      reducer(
        {
          isAuthed: false,
          errors: errMsg,
          success: errMsg,
        },
        duck.hideError()
      )
    ).toEqual({
      isAuthed: false,
      errors: '',
      success: errMsg,
    });
  });

  it('should hide the success msg', () => {
    expect(
      reducer(
        {
          isAuthed: false,
          errors: errMsg,
          success: errMsg,
        },
        duck.hideSuccess()
      )
    ).toEqual({
      isAuthed: false,
      errors: errMsg,
      success: '',
    });
  });
});

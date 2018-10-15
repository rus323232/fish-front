import reducer, * as duck from '../../../src/app/containers/App/duck';

describe('Test action creators App', () => {
  it('noty actions', () => {
    const testMsg = 'test message';
    expect(duck.showError(testMsg)).toEqual({ type: duck.SHOW_ERROR, payload: testMsg });
    expect(duck.hideError()).toEqual({ type: duck.HIDE_ERROR });
    expect(duck.showSuccess(testMsg)).toEqual({ type: duck.SHOW_SUCCESS, payload: testMsg });
    expect(duck.hideSuccess()).toEqual({ type: duck.HIDE_SUCCESS });
  });
});

describe('Test app reducer', () => {
  const errMsg = 'test message';

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'Unused_Action' })).toEqual({
      errors: '',
      success: '',
    });
  });

  it('should return the error msg', () => {
    expect(reducer(undefined, duck.showError(errMsg))).toEqual({
      errors: errMsg,
      success: '',
    });
  });

  it('should return the success msg', () => {
    expect(reducer(undefined, duck.showSuccess(errMsg))).toEqual({
      errors: '',
      success: errMsg,
    });
  });

  it('should hide the error msg', () => {
    expect(
      reducer(
        {
          errors: errMsg,
          success: errMsg,
        },
        duck.hideError()
      )
    ).toEqual({
      errors: '',
      success: errMsg,
    });
  });

  it('should hide the success msg', () => {
    expect(
      reducer(
        {
          errors: errMsg,
          success: errMsg,
        },
        duck.hideSuccess()
      )
    ).toEqual({
      errors: errMsg,
      success: '',
    });
  });
});

import * as React from 'react';
import cx from 'classnames';

const InputMask = require('react-input-mask');

const s = require('./inputStyle');

export interface InputProps extends React.InputHTMLAttributes<any> {
  label: string;
  labelClass?: string;
  inputClass?: string;
  error?: string;
}

export default class PhoneInput extends React.PureComponent<InputProps, any> {
  static defaultProps = {
    type: 'tel',
    error: '',
    required: false,
    autoComplete: 'off',
    labelClass: '',
    inputClass: '',
  };

  render() {
    const { label, labelClass, inputClass, required, error, ...props } = this.props;
    return (
      <label className={cx(s.label, labelClass)}>
        <span>
          {label}
          {required && <span className="requiredColor">*</span>}
        </span>
        {error && <span className={s.errorClass}>{error}</span>}
        <InputMask
          className={cx(s.input, inputClass)}
          mask="+7 (999) 999-99-99"
          required={required}
          {...props}
        />
      </label>
    );
  }
}

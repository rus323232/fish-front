import * as React from 'react';
import cx from 'classnames';
import InputMask from 'react-input-mask';

const s = require('./input');

export interface InputProps extends React.InputHTMLAttributes<any> {
  label: string;
  labelClass?: string;
  inputClass?: string;
  error?: string;
}

export default class Input extends React.PureComponent<InputProps, any> {
  static defaultProps = {
    type: 'text',
    error: '',
    required: false,
    autoComplete: 'off',
    labelClass: '',
    inputClass: '',
  };

  render() {
    const {
      label,
      type,
      name,
      labelClass,
      inputClass,
      required,
      error,
      ...props
    } = this.props;
    const isPas = type === 'password';
    return (
      <label className={cx(s.label, labelClass)}>
        <span>
          {label}
          {required && <span className="requiredColor">*</span>}
        </span>
        {!!error && <span className={s.errorClass}>{error}</span>}
        <InputMask
          type="tel"
          className={cx(s.input, inputClass)}
          name={name}
          mask="+7 (999) 999-99-99"
          required={required}
          {...props}
        />
      </label>
    );
  }
}

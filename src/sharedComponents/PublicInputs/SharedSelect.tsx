import * as React from 'react';
import * as cx from 'classnames';
import Select from 'react-select';
import { Props } from 'react-select/lib/Select';

const s = require('./input');

export interface ISharedSelect extends Props {
  label: string;
  labelClass?: string;
  inputClass?: string;
  error?: string;
  required?: boolean;
}

export default class SharedSelect extends React.PureComponent<ISharedSelect, any> {
  static defaultProps = {
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
        {!!error && <span className={s.errorClass}>{error}</span>}
        <Select classNamePrefix="shared_select" {...props} />
      </label>
    );
  }
}

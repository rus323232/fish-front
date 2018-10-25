import * as React from 'react';
import wrapper, { InjectedProps } from './AuthWrapper';

interface IAuthFormProps extends InjectedProps {
  t: string;
}

class AuthForm extends React.Component<IAuthFormProps, any> {
  public render() {
    const {
      handleChange,
      data: {},
    } = this.props;
    return <div />;
  }
}

export default wrapper(AuthForm);

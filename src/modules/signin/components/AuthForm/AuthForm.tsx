import * as React from 'react';
import wrapper, { InjectedProps } from './AuthWrapper';

interface IAuthFormProps extends InjectedProps {}

class AuthForm extends React.Component<IAuthFormProps, any> {
  public render() {
    const { data, handleChange } = this.props;
    return (
      <form>
        <input type="email" name="email" value={data.email} onChange={handleChange} />
      </form>
    );
  }
}

export default wrapper(AuthForm);

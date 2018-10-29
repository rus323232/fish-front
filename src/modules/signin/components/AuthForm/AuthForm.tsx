import * as React from 'react';
import wrapper, { InjectedProps } from './AuthWrapper';
import { PhoneInput } from 'src/sharedComponents/PublicInputs';

interface IAuthFormProps extends InjectedProps {}

class AuthForm extends React.Component<IAuthFormProps, any> {
  public render() {
    const { data, handleChange, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <PhoneInput
          label="Номер телефона"
          name="phone"
          placeholder="+7 (909) 45-05-885"
          value={data.phone}
          onChange={handleChange}
        />
      </form>
    );
  }
}

export default wrapper(AuthForm);

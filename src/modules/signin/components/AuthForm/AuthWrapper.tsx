import * as React from 'react';

export interface InjectedProps extends InnerState {
  handleChange: () => void;
}

interface InnerState {
  data: {
    email: string;
    phone: string;
  };
  errors: {
    email: string;
    phone: string;
  };
}

export default function AuthWrapper<T extends InjectedProps>(
  WrappedComponent: React.ComponentType<T>
): React.ComponentClass<T> {
  return class IApp extends React.Component<T, InnerState> {
    state = {
      data: {
        email: '',
        phone: '',
      },
      errors: {
        email: '',
        phone: '',
      },
    };

    handleChange = () => {};

    public render() {
      return (
        <WrappedComponent {...this.props} {...this.state} handleChange={this.handleChange} />
      );
    }
  };
}

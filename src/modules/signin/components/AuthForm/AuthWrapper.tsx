import * as React from 'react';

export interface InjectedProps extends InnerState {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
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
) {
  return class IApp extends React.Component<{}, InnerState> {
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

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { value, name } = e.currentTarget;
      this.setState(({ data }) => ({
        data: {
          ...data,
          [name]: value,
        },
      }));
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };

    public render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
}

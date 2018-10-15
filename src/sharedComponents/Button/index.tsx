import * as React from 'react';

const s = require('./addButton');

export interface IAddButtonProps {
  onClick: () => void;
  type?: string;
  title?: string;
}

export class AddButton extends React.Component<IAddButtonProps, any> {
  static defaultProps = {
    type: 'button',
    title: 'Добавить услугу'
  };
  
  render() {
    return (
      <button className={s.addFormBtn} {...this.props}>
        <i className={s.icon} />
        {this.props.title}
      </button>
    );
  }
}

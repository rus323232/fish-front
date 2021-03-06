import { withInfo } from '@storybook/addon-info';

const wInfoStyle = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '20px',
      display: 'inline',
    },
    body: {
      padding: 0,
    },
    h2: {
      display: 'inline',
      color: '#999',
    },
  },
  infoBody: {
    backgroundColor: '#eee',
    padding: '0 5px',
    lineHeight: '2',
  },
};

export const wInfo = text =>
  withInfo({ inline: true, source: false, styles: wInfoStyle, text });

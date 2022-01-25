import baseConfig from './app.base.config';

const config = {
  ...baseConfig,
  version: 'v1.0.0(test)',
  apiDomain: 'http://127.0.0.1:3353',
  socketDomain: 'http://127.0.0.1:3005',
  // socketDomain: 'https://86f4dbe3.ngrok.io',
};

export default config;

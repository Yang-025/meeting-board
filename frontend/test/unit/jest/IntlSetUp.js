import intl from 'react-intl-universal';
// import { locales } from '~~utils/CommonUtils';

// 多國語系
const locales = {
  'en-US': require('../../../src/locales/en-US.json'),
  'zh-CN': require('../../../src/locales/zh-CN.json'),
  'zh-TW': require('../../../src/locales/zh-TW.json'),
};


// # 預設多國語系為英文
const language = 'en-US';
intl.init({
  currentLocale: language, // TODO: determine locale here
  locales,
}).then(() => {
  window.localStorage.setItem('language', language);
});

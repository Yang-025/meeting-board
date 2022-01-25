import React, { Component } from 'react';
import { withRouter } from 'react-router';
import intl from 'react-intl-universal';
import intlUniversalHelper from '~~hoc/intlUniversal/intlUniversalHelper';
// import NotificationSystemHelper from '~~hoc/NotificationSystem/NotificationSystemHelper';

import Header from './Header';

const SUPPOER_LOCALES = [
  {
    name: 'English',
    value: 'en-US'
  },
  {
    name: '简体中文',
    value: 'zh-CN'
  },
  {
    name: '繁體中文',
    value: 'zh-TW'
  },
];

@intlUniversalHelper
// @NotificationSystemHelper
class App extends Component {
  onSelectLocale = (e) => {
    let lang = e.target.value;
    console.log('語言想要換成', lang, this.props);
    this.props.switchIntl(lang);
  }

  renderLocaleSelector() {
    return (
      <select onChange={this.onSelectLocale} defaultValue="">
        <option value="" disabled>Change Language</option>
        {SUPPOER_LOCALES.map(locale => (
          <option key={locale.value} value={locale.value}>{locale.name}</option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}


export default withRouter(App);

import React, { Component } from 'react';
import { NavLink as ReactRouterLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="nav header-nav">
          <ReactRouterLink className="nav-link" to="/">首頁</ReactRouterLink>
          <ReactRouterLink className="nav-link" to="/test/img">測試圖片與css</ReactRouterLink>
        </nav>
      </div>
    );
  }
}

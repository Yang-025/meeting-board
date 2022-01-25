import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from '~~utils/Auth';
import { login } from './AuthActions';
import LoginForm from './LoginForm';


@connect(
  state => ({
    isLoggedin: state.auth.isLoggedin
  }),
  dispatch => ({
    actions: bindActionCreators({ login }, dispatch)
  }),
)
class Login extends Component {
  // state = {
  //   redirectToReferrer: false,
  // }

  componentWillMount() {
    if (checkAuth()) {
      console.log('有jwt');
      this.setState({ redirectToReferrer: true });
    } else {
      console.log('沒有jwt');
    }
  }

  login = (fromPath, value) => {
    this.props.actions.login(fromPath, value);
  }

  render() {
    console.log('this.props.isLoggedin', this.props.isLoggedin);
    // 檢查是否是從別頁過來的，沒有就填'/'，驗證成功要導回去
    const { fromPath } = this.props.location.state || { fromPath: { pathname: '/' } };

    // if (this.props.isLoggedin) {
    if (checkAuth()) {
      return (
        <Redirect to={fromPath} />
      );
    }

    return (
      <div>
        <p>請先登入才可以瀏覽： {fromPath.pathname}</p>
        <button onClick={() => this.login(fromPath)}>登入</button>
        <LoginForm onSubmit={value => this.login(fromPath, value)} />
      </div>
    );
  }
}


// props驗證
Login.WrappedComponent.propTypes = {
  isLoggedin: PropTypes.bool.isRequired,
  location: PropTypes.shape().isRequired,
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired
  }).isRequired
};

export default Login;

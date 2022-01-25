import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import small from '~~assets/images/small.jpg';
import big from '~~assets/images/big.jpg';
import { simpleAction, anotherSimpleAction, anotherSimpleAction2, ping } from './TestImgAndCssActions';

import './TestImgAndCssContainer.scss';


const IMG = styled.img`
  border: 10px solid ${props => (props.status === 'normal' ? 'goldenrod' : 'forestgreen')};
  /* 測試 prefix */
  display: flex;
  background: linear-gradient(red, green);
`;


const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
};
@connect(
  state => ({
    msg: state.simple.msg,
    status: state.simple.status,
    isPinging: state.simple.isPinging
  }),
  dispatch => ({
    // actions: bindActionCreators(TestImgAndCssActions, dispatch),
    actions: bindActionCreators({ simpleAction, anotherSimpleAction, anotherSimpleAction2, ping }, dispatch)
  }),
)
class TestImgAndCss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: STATUS.NORMAL
    };
  }

  componentDidMount() {
    console.log('TestImgAndCss componentDidMount!!');
    console.log('[TestImgAndCss要近來]');
    this.props.actions.anotherSimpleAction();
    // this.props.actions.anotherSimpleAction2();
  }

  componentWillUnmount() {
    console.log('[TestImgAndCss要離開]');
  }

  onMouseEnter = () => {
    this.setState({ class: STATUS.HOVERED });
  }


  onMouseLeave = () => {
    this.setState({ class: STATUS.NORMAL });
  }


  render() {
    return (
      <div>
        <button onClick={this.props.actions.simpleAction}>Click Me</button>
        <span>{this.props.msg} {this.props.status}</span>
        <button onClick={this.props.actions.ping}>Rx-Observable Test</button>
        <span>{this.props.isPinging.toString()}</span>
        <IMG
          className={this.state.class}
          status={this.state.class}
          src={big}
          alt="big"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
        <img className="normal-css" src={small} alt="small" />
      </div>
    );
  }
}

export default TestImgAndCss;


// props驗證
TestImgAndCss.WrappedComponent.propTypes = {
  status: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    simpleAction: PropTypes.func.isRequired,
    anotherSimpleAction: PropTypes.func.isRequired,
    anotherSimpleAction2: PropTypes.func.isRequired
  }).isRequired
};

// 預設props
// TestImgAndCss.WrappedComponent.defaultProps = {};

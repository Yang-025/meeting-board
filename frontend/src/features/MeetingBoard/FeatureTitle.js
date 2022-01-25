import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';


const FeatureTitleDiv = styled.div`
  .feature {
    &--name {
      height: 2rem;
      cursor: pointer;
    }

    &--icon {
      z-index: 1;
    }

    &--title {
      height: inherit;
      width: inherit;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  input {
    width: 100%;
  }

  position: relative;
  .feature--icon {
    position: absolute;
    z-index: 100
  }
`;

export default class FeatureTitle extends Component {
  state = {
    term: '',
    isReadMode: true
  }
  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState((prevState) => ({
        isReadMode: !prevState.isReadMode,
        term: ''
      }));
      this.props.updateFeature(this.state.term);
    }
  }

  handleEdit = () => {
    this.setState((prevState) => ({
      isReadMode: !prevState.isReadMode,
      term: this.props.title
    }));
  }

  handleDelete = (event) => {
    event.stopPropagation();
    this.props.deleteFeature();
  }
  render() {
    return (
      <FeatureTitleDiv className="feature--name">
        {this.state.isReadMode ?
          <div onClick={this.handleEdit} onKeyUp={() => {}}>
            <div className="feature--icon"><FaTrash size={16} onClick={this.handleDelete} /></div>
            <div className="feature--title">{this.props.title}</div>
          </div> :
          <input
            type="text"
            value={this.state.term}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        }

      </FeatureTitleDiv>
    );
  }
}

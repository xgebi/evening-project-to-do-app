import React, { Component } from 'react';
import './create-button-component.css';

class CreateButtonComponent extends Component {
  render() {
    return (
      <button className="create-button" onClick={this.props.onClick}>
        Add
      </button>
    );
  }
}

export default CreateButtonComponent;

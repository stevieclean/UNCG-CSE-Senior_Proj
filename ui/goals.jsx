import React, { Component } from 'react';

// Task component - represents a single todo item

export default class Goal extends Component {
  render() {
    return (
      <li>{this.props.goal.text}</li>
    );
  }
}
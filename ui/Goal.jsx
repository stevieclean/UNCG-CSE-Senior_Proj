import React, { Component } from 'react';

import { Goals } from '../api/goals.js';


//Goal Component
export default class Goal extends Component {

  toggleChecked() {
    //checked or unchecked.
    Goals.update(this.props.goal._id, {
      $set: { checked: !this.props.goal.checked },
    });
  }
  //function to delete a goal.
  deleteThisGoal() {
    Goals.remove(this.props.goal._id);
  }

  render() {

    const goalClassName = this.props.goal.checked ? 'checked' : '';
    return (
      //delete a goal with the or check it off/allow the text to wrap in the box.
      <li className={goalClassName}>
      <button className="delete" onClick={this.deleteThisGoal.bind(this)}>
        &times;
      </button>

      <input
        type="checkbox"
        readOnly
        checked={!!this.props.goal.checked}
        onClick={this.toggleChecked.bind(this)}
      />
      <span className="text">{this.props.goal.text}</span>
    </li>
    );
  }
}
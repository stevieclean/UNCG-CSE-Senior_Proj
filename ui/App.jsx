import React, { Component } from 'react';
//for certain events.
import ReactDOM from 'react-dom';
//creating a data container for the reactive data.
import { withTracker } from 'meteor/react-meteor-data';
//pull the goals from the collection
import { Goals } from '../api/goals.js';
import Goal from './Goal.jsx';

//The app itself is a componet.
class App extends Component {
    //wait for an event listener.
    handleSubmit(event) {
      event.preventDefault();
     // get each text input.
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    
    Goals.insert({
      text,
      createdAt: new Date(),
    });

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }




//render each goal.
  renderGoals() {    
      return this.props.goals.map((goal) => (
      <Goal key={goal._id} goal={goal} />
    ));
  }
 //render input form.
  render() {
    return (
      <div className="container">
        <header>
          <h1>Goal Tracker</h1>
          <form className="new-goal" onSubmit={this.handleSubmit.bind(this)} >
          <input
           type="text"
           ref="textInput"
           placeholder="Create a new goal!"
           />
           </form>
        </header>

        <ul>
          {this.renderGoals()}
        </ul>

      </div>

    );
  }
}
//get a goal from the database.
export default withTracker(() => {
  return {
    //use when needed to get the date from the database.
    //goals: Goals.find({}).fetch(),
    //get a goal and sort it newest first.
    goals: Goals.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(App);

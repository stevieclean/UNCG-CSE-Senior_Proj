import { Template } from 'meteor/templating';
import { Goals } from '../api/goals.js';
import './goal.html';

Template.goal.events({
    //Decide what checking the box does.
  'click .toggle-checked'() {
      //update the item for removal
    Goals .update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  //remove the item from the server.
  'click .delete'() {
    Goals.remove(this._id);
  },
});
//Need the code to insert and event from the calander.
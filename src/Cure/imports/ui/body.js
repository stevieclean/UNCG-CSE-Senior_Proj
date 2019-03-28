import { Template } from 'meteor/templating';
import { Goals } from '../api/goals.js';
import './goal.js';
import './body.html';

Template.GoalTracker.helpers({
    goals() {
        //Put the most recent goals at the top of the list
        console.log("testing the helper")
        return Goals.find({}, { sort: { createdAt: -1 } });
    },
});

Template.GoalTracker.events({
    //create a new goal
    'submit.new-goal' (event) {
        // Prevent default browser form submit
        console.log("adding a new goal")
        event.preventDefault();

        //Get the value.
        const target = event.target;
        const text = target.text.value;

        //Create a new gooal and put it into the collection
        Goals.insert({
            text,
            createdAt: new Date(), // current time
        });

        // Clear form
        target.text.value = '';
    },
});
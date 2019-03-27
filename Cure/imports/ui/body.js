import { Template } from 'meteor/templating';
import { Goals } from '../api/goals.js';
import './goal.js';
import './body.html';

Template.body.helpers({
    goals() {
        //Put the most recent goals at the top of the list
        console.log("Return the list...")
        return Goals.find({}, { sort: { createdAt: -1 } });

    },
});

Template.body.events({
    //create a new goal
    'submit.new-goal' (event) {
        // Prevent default browser form submit
        event.preventDefault();
        console.log("Added new Goal...");

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
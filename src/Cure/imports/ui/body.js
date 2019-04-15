import { Template } from 'meteor/templating';
import { Goals } from '../api/goals.js';
import { Destination } from '../../client/Events/Destination.js';
import EventListener from '../../client/Events/EventListener.js';
import EventMessage from '../../client/Events/EventMessage.js';
import './body.html';

var localStorage = new PersistentMinimongo2(Goals, "goalTrackerGoals");

export default class GoalTracker {
    constructor() {
            this._listeners = new EventListener;
            //Getting all the goals out of the Mongo Database.
            this.goalTrHelper = Template.GoalTracker.helpers({
                goals() {
                    //Put the most recent goals at the top of the list
                    console.log("testing the helper")
                    return Goals.find({}, { sort: { createdAt: -1 } });
                },
            });
            //Inserting the goals into the database and clearing the form. 
            this.goalTrEvents = Template.GoalTracker.events({
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
                "click #addgoal": function() {
                    // Prevent default browser form submit
                    console.log("adding a new goal")

                    var goalText = document.getElementById("text").value;
                    console.log(goalText);
                    //Create a new gooal and put it into the collection
                    Goals.insert({
                        text: goalText,
                        createdAt: new Date(), // current time
                    });
                    //clear form
                    document.getElementById("text").value = '';
                },
            });
            this.goalEvent = Template.goal.events({
                //Decide what checking the box does.
                'click .toggle-checked' () {
                    //update the item for removal
                    Goals.update(this._id, {
                        $set: { checked: !this.checked },
                    });
                },
                //remove the item from the server.
                'click .delete' () {
                    Goals.remove(this._id);
                },
            });

        }
        //function
    get listeners() {
        console.log("added goal_tracker listener");
        return this._listeners;
    }

    handleMessage(message) {
        if (message.dest == Destination["GOALTRACKER"]) {
            // if is true the goaltracker handles the message
            console.log("Got dat bruh!");
            console.log(message);
            Goals.insert({

                text: message.message,
                createdAt: new Date()
            });

        }
    }
}
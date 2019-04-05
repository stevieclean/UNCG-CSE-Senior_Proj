import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Source } from "./Events/Source.js";
import './calendar.html';
import { Template } from "meteor/templating";
import TinyDatePicker from "tiny-date-picker/dist/tiny-date-picker";
import EventMessage from "./Events/EventMessage.js";
import Controller from "./Controller.js";

g_startDate = new Date();
g_endDate = new Date();
messagesending = this.sendMessage;

export default class Calendar {
    get listeners() {
        console.log("added calendar listener.");
        return this._listeners;
    }

    handleMessage(message) {
        if (message.dest == Destination["CALENDAR"]) {
            // if is true the calendar handle the message and 

        }
        //if not true the message dies off
    }

    constructor() {
        this._listeners = new EventListener;
        this.title = "";
        this.eventLocation = "";
        this.notes = "";
        var sendMessage = (message) => {
            console.log("fire");
            this._listeners.fireEvent(message);
        };
        this.templateHelper = Template.Calendar.events({
            "click #sendevent": function() {
                this.title = document.getElementById("titletextarea").value;
                this.notes = document.getElementById("messagetextarea").value;
                var success = function(message) { alert("Successfully added calendar event!"); };
                var error = function(message) { alert("Error: " + message); };
                console.log(g_startDate);
                event = new EventMessage(this.notes, Destination['GOALTRACKER'], Source['CALENDAR']);
                sendMessage(event);
                //window.plugins.calendar.createEvent(this.title, this.eventLocation, this.notes, g_startDate, g_endDate, success, error);
            },
            "click #delevent": function() {
                this.title = document.getElementById("titletextarea").value;
                var success = function(message) { alert("Successfully deleted calendar event!"); };
                var error = function(message) { alert("Error: Could not find message"); };
                window.plugins.calendar.deleteEvent(this.title, null, null, g_startDate, g_endDate, success, error);
            }
        });
        this.templateRender = Template.Calendar.onRendered(function() {

            const startDate = TinyDatePicker('.startModal', {}).on({
                select: function(_, dp) {
                    console.log('SELECT ', _, dp.state.selectedDate);
                    g_startDate = dp.state.selectedDate;
                }
            });

            const endDate = TinyDatePicker('.endModal', {}).on({
                select: function(_, dp) {
                    console.log('SELECT ', _, dp.state.selectedDate);
                    g_endDate = dp.state.selectedDate;
                }
            });
        })
    }
}
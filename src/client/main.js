import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import Controller from './Controller.js';
import './main.html';
import './hotdial.html';
import './settings.html';
import './education.html';
import './map.html';
import './calendar.html';
import './goaltracker.html';
import { Destination } from './Events/Destination.js';

var controller = new Controller();
controller.printCalenderInfo();
  // prep some variables
  var startDate = new Date(2015,2,15,18,30,0,0,0); // beware: month 0 = january, 11 = december
  var endDate = new Date(2015,2,15,19,30,0,0,0);
  var title = "My nice event";
  var eventLocation = "Home";
  var notes = "Some notes about this event.";
  var success = function(message) { alert("Success: " + JSON.stringify(message)); };
  var error = function(message) { alert("Error: " + message); };
/*
  // create an event silently (on Android < 4 an interactive dialog is shown)
  window.plugins.calendar.createEvent(title,eventLocation,notes,startDate,endDate,success,error);
 
  // create an event silently (on Android < 4 an interactive dialog is shown which doesn't use this options) with options:
  var calOptions = window.plugins.calendar.getCalendarOptions(); // grab the defaults
  calOptions.firstReminderMinutes = 120; // default is 60, pass in null for no reminder (alarm)
  calOptions.secondReminderMinutes = 5;
 
  // This is new since 4.2.7:
  calOptions.recurrenceInterval = 2; // once every 2 months in this case, default: 1
 
  // And the URL can be passed since 4.3.2 (will be appended to the notes on Android as there doesn't seem to be a sep field)
  calOptions.url = "https://www.google.com";
 
  // on iOS the success handler receives the event ID (since 4.3.6)
  window.plugins.calendar.createEventWithOptions(title,eventLocation,notes,startDate,endDate,calOptions,success,error);
 
  // create an event interactively
  window.plugins.calendar.createEventInteractively(title,eventLocation,notes,startDate,endDate,success,error);
 
  // create an event interactively with the calOptions object as shown above
  window.plugins.calendar.createEventInteractivelyWithOptions(title,eventLocation,notes,startDate,endDate,calOptions,success,error);
 
  // find events (on iOS this includes a list of attendees (if any))
  window.plugins.calendar.findEvent(title,eventLocation,notes,startDate,endDate,success,error);
 
  // list all events in a date range (only supported on Android for now)
  window.plugins.calendar.listEventsInRange(startDate,endDate,success,error);
 
  // list all calendar names - returns this JS Object to the success callback: [{"id":"1", "name":"first"}, ..]
  window.plugins.calendar.listCalendars(success,error);
 
  // or to add a reminder, make it recurring, change the calendar, or the url, use this one:
  var filterOptions = window.plugins.calendar.getCalendarOptions(); // or {} or null for the defaults
  filterOptions.id = "D9B1D85E-1182-458D-B110-4425F17819F1"; // iOS only, get it from createEventWithOptions (if not found, we try matching against title, etc)
  var newOptions = window.plugins.calendar.getCalendarOptions();
  newOptions.calendaName = "New Bla"; // make sure this calendar exists before moving the event to it
  // not passing in reminders will wipe them from the event. To wipe the default first reminder (60), set it to null.
  newOptions.firstReminderMinutes = 120;
  window.plugins.calendar.modifyEventWithOptions(title,eventLocation,notes,startDate,endDate,newTitle,eventLocation,notes,startDate,endDate,filterOptions,newOptions,success,error);
 
  // delete an event (you can pass nulls for irrelevant parameters). The dates are mandatory and represent a date range to delete events in.
  // note that on iOS there is a bug where the timespan must not be larger than 4 years, see issue 102 for details.. call this method multiple times if need be
  // since 4.3.0 you can match events starting with a prefix title, so if your event title is 'My app - cool event' then 'My app -' will match.
  window.plugins.calendar.deleteEvent(newTitle,eventLocation,notes,startDate,endDate,success,error);
 
  // delete an event by id. If the event has recurring instances, all will be deleted unless `fromDate` is specified, which will delete from that date onward. (iOS and android only)
  window.plugins.calendar.deleteEventById(id,fromDate,success,error);
 
  // open the calendar app (added in 4.2.8):
  // - open it at 'today'
  window.plugins.calendar.openCalendar();
  // - open at a specific date, here today + 3 days
  var d = new Date(new Date().getTime() + 3*24*60*60*1000);
  window.plugins.calendar.openCalendar(d, success, error); // callbacks are optional
*/
console.log(Destination['GOALTRACKER']);
//Todos = new Mongo.Collection("todos");
currPage = "MainPage";
	
//For changing the current page
Session.set({"myTemplate" : currPage});

Template.dynamicTemplate.helpers({
	page: function () {
		return Session.get("myTemplate");
	}
});

Template.OneDial.events({
	"click #onedial": function () {
		currPage = "HotDial";
		Session.set("myTemplate", currPage);
	}
});

Template.buttons.events({
	"click #location": function () {
		currPage = "Map";
		Session.set("myTemplate", currPage);
	},
	"click #calendar": function () {
		currPage = "Calendar";//Change to name of template
		Session.set("myTemplate", currPage);
	},
	"click #home": function () {
		currPage = "MainPage";
		Session.set("myTemplate", currPage);
	},
	"click #goalTracker": function () {
		currPage = "Goaltracker";
		Session.set("myTemplate", currPage);
	},
	"click #education": function () {
		currPage = "Education";
		Session.set("myTemplate", currPage);
	},
	"click #settings": function () {
		currPage = "Settings";
		Session.set("myTemplate", currPage);
	}

});

/* Code to make phone call
"click #onedial": function () {
		function onSuccess(result) {
			console.log("Success:"+result);
		}
		  
		function onError(result) {
			console.log("Error:"+result);
		}
		window.plugins.CallNumber.callNumber(onSuccess, onError, '+13367720649', true);
	}
*/
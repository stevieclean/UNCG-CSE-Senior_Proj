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
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Accounts }  from 'meteor/accounts-base';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Destination } from './Events/Destination.js';
import Controller from './Controller.js';
//Goal Tracker import
import '../imports/ui/body.js';
import '../imports/ui/body.html'
//import '../imports/ui/goal.html'
//End goal tracker import
// imports in alphabetical order
import './about.html';
import './Calendar/calendar.html';
import './Education/conference.html';
import './Education/course.html';
import './Education/spotlight.html';
import './Education/creditstat.html';
import './Education/education.html';
import './Education/handouts.html';
import './Education/onlinecourse.html';
import './Education/refresher.html';
import './Settings/create.html';
import './Goaltracker/goaltracker.html';
import './HotDial/hotdial.html';
import './main.html';
import './Map/map.html';
import './Settings/notes.html';
import './Settings/password.html';
import './Settings/pin.html';
import './Settings/profile.html';
import './Settings/security.html';
import './Settings/settings.html';
import './Settings/signup.html';
import './Settings/theme.html';

//Variable (stored with Session map) that is used to indicate which page to visit dynamically
export var currPage = "MainPage";

//For changing the current page, First time setup creates the "myTemplate" key - currPage value pairing
Session.set({ "myTemplate": currPage });

Template.dynamicTemplate.helpers({
    page: function() {
        return Session.get("myTemplate");
    }
});

Template.OneDial.events({
    "click #onedial": function() {
        currPage = "HotDial";
        Session.set("myTemplate", currPage);
    }
});

Template.buttons.events({
    "click #location": function() {
        currPage = "Map";
        Session.set("myTemplate", currPage);
    },
    "click #calendar": function() {
        currPage = "Calendar"; //Change to name of template
        Session.set("myTemplate", currPage);
    },
    "click #home": function() {
        currPage = "MainPage";
        Session.set("myTemplate", currPage);
    },
    "click #goalTracker": function() {
        currPage = "Goaltracker";
        Session.set("myTemplate", currPage);
    },
    "click #education": function() {
        currPage = "Education";
        Session.set("myTemplate", currPage);
    }

});
Template.dropdownmenu.events({
  "click #settings": function () {
		currPage = "Settings";
		Session.set("myTemplate", currPage);
	}
});
Template.dropdownmenu.events({
    "click #settings": function() {
        currPage = "Settings";
        Session.set("myTemplate", currPage);
    },
    "click #about": function () {
    currPage = "About";
    Session.set("myTemplate", currPage);
    },
    "click .login-toggle": function(){
        currPage = "Create";
        Session.set("myTemplate", currPage);
    },
    "click #logout": function() {
        Accounts.logout();
    },
    "click #home": function() {
        currPage = "About";
        Session.set("myTemplate", currPage);
    }

});
Template.Create.events({
    "click #create": function() {
        currPage = "Create";
        Session.set("myTemplate", currPage);
    },
    "click .login-toggle": function() {
        currPage = "Create";
        Session.set("myTemplate", currPage);
    },
    'click .logout': ()=> {
        Accounts.logout();
    }
});
Template.Signup.events({
    "click #signup": function() {
        currPage = "Signup";
        Session.set("myTemplate", currPage);
    }
});
Template.Password.events({
    "click #security": function() {
        currPage = "Security";
        Session.set("myTemplate", currPage);
    },
    "click #pin": function() {
        currPage = "Pin";
        Session.set("myTemplate", currPage);
    }
});
Template.Security.events({
    "click #security": function() {
        currPage = "Security";
        Session.set("myTemplate", currPage);
    },
    "click #pin": function() {
        currPage = "Pin";
        Session.set("myTemplate", currPage);
    }
});
// Template.Main.events({
//     "click .login-toggle": function() {
//         currPage = "";
//         Session.set("myTemplate", currPage);
//     },
//     'click .logout': ()=> {
//         Meteor.logout();
//     }
// });

var controller = new Controller();
/* Code to make phone call
"click #onedial": function () {
		function onSuccess(result) {
			console.log("Success:"+result);
		}
		  
		function onError(result) {
			console.log("Error:"+result);
		}
		window.plugins.CallNumber.callNumber(onSuccess, onError, '+13367729649', true);
	}
*/

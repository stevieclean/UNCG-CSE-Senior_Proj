import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import { Template } from "meteor/templating";
import { currPage } from "./main.js";

//import './css-vars.scss';
import './create.html';
import './signup.html';

export default class Signup {
	constructor() {
		//this.events = "";
		this._listeners = new EventListener;
		this.template = Template.Signup.events({
			"click #clock": function() {
				console.log(currPage);
				currPage = "Clock";
                Session.set("myTemplate", currPage);
			},
			
			"click #profile": function() {
				console.log(currPage);
				currPage = "Profile";
                Session.set("myTemplate", currPage);
			},
			"click #password": function() {
				console.log(currPage);
				currPage = "Password";
                Session.set("myTemplate", currPage);
			},
			"click #notes": function() {
				console.log(currPage);
				currPage = "Notes";
                Session.set("myTemplate", currPage);
			},
			"click #create": function() {
				console.log(currPage);
				currPage = "Create";
                Session.set("myTemplate", currPage);
			},
			"click #signup": function() {
				console.log(currPage);
				currPage = "Signup";
                Session.set("myTemplate", currPage);
			}
			
		})
	}

	get listeners() {
		console.log("added settings listener.");
		return this._listeners;
	}

	handleMessage(message) {
		if (message.dest == Destination["SETTINGS"]) {
			// if is true the map handle the message
			
			
		}
		//if not true the message dies off
	}

}
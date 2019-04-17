import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import { Template } from "meteor/templating";
import { currPage } from "./main.js";
import './about.html';
import './theme.html';
import './create.html';
import './notes.html';
import './password.html';
import './profile.html';
import './settings.html';
import './signup.html';

export default class Settings {
	constructor() {
		//this.events = "";
		this._listeners = new EventListener;
		this.template = Template.Settings.events({
			"click #theme": function() {
				console.log(currPage);
				currPage = "Theme";
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
			}
		
			
			// "click #login": function() {
			// 	console.log(currPage);
			// 	currPage = "Login";
            //     Session.set("myTemplate", currPage);
			
			
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
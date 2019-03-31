import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import './settings.html';
import { Template } from "meteor/templating";
import { currPage } from "./main.js";


export default class Settings {
	constructor() {
		this.events = "";
		this._listeners = new EventListener;
		this.template = Template.Settings.events({
			"click #addclockbutton": function() {
				console.log(currPage);
				currPage = "Clock";
                Session.set("myTemplate", currPage);
			},
			"click #addprofilebutton": function() {
			},
			"click #addpasswordbutton": function() {
			},
			"click #addnotesbutton": function() {
			}
		})
	}

	get listeners() {
		console.log("added settings listener");
		return this._listeners;
	}

	handleMessage(message) {
		if (message.dest == Destination["SETTINGS"]) {
			// if is true the map handle the message
			
			
		}
		//if not true the message dies off
	}

}
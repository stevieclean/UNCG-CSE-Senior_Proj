import EventListener from "../Events/EventListener.js";
import { Destination } from "../Events/Destination.js";
import { Session } from 'meteor/session';
import { Template } from "meteor/templating";
import { currPage } from "../main.js";
import './settings.html';
import './password.html';
import './security.html';
import './pin.html';


export default class Password {
	constructor() {
		//this.events = "";
		this._listeners = new EventListener;
		this.template = Template.Password.events({
			"click #security": function() {
				console.log(currPage);
				currPage = "Security";
                Session.set("myTemplate", currPage);
            },
            "click #pin": function() {
				console.log(currPage);
				currPage = "Pin";
                Session.set("myTemplate", currPage);
            },
            "click #settings": function() {
				console.log(currPage);
				currPage = "Settings";
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
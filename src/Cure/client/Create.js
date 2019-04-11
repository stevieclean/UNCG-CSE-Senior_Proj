import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import './profile.html';
import './create.html';

import { Template } from "meteor/templating";
import { currPage } from "./main.js";



export default class Create {
	constructor() {
		//this.events = "";
		this._listeners = new EventListener;
		this.template = Template.Create.events({
            "click #signup": function() {
				console.log(currPage);
				currPage = "Signup";
               Session.set("myTemplate", currPage);
            },
             "click #login": function() {
				console.log(currPage);
				currPage = "Login";
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
        if (message.dest == Destination["CREATE"]) {
        // if is true the map handle the message
                    
                    
        }
                //if not true the message dies off
    }
        
}
import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import { Template } from "meteor/templating";
import { currPage } from "./main.js";
import './settings.html';
import './notes.html';


export default class Notes {
	constructor() {
		//this.events = "";
		this._listeners = new EventListener;
		this.template = Template.Notes.events({
			"click #settings": function() {
				console.log(currPage);
				currPage = "Settings";
                Session.set("myTemplate", currPage);
            },
            "click #fonts": function() {
				console.log(currPage);
				currPage = "Settings";
                Session.set("myTemplate", currPage);
            },
            "click #fontSize": function() {
				console.log(currPage);
				currPage = "Settings";
                Session.set("myTemplate", currPage);
            },
            "click #layout": function() {
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
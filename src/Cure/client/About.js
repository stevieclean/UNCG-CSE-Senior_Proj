import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import { Template } from "meteor/templating";
import { currPage } from "./main.js";
import './about.html';


export default class About {
	constructor() {
		//this.events = "";
		this._listeners = new EventListener;
		this.template = Template.buttons.events({
            "click #home": function() {
				console.log(currPage);
				currPage = "MainPage";
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
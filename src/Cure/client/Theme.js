import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import { Template } from "meteor/templating";
import { currPage } from "./main.js";
import './settings.html';
import './theme.html';


export default class Theme {
	constructor() {
		//this.events = "";
		this._listeners = new EventListener;
		this.template = Template.Theme.events({
			"click #settings": function() {
				console.log(currPage);
				currPage = "Settings";
                Session.set("myTemplate", currPage);
            },
            "click #dark": function() {
				document.documentElement.style.setProperty('--bg-primary-color', '#0f0f0f');
                document.documentElement.style.setProperty('--fg-color', 'white');
                document.documentElement.style.setProperty('--btn-color', '#505050');
                document.documentElement.style.setProperty('--navbutton-color', 'white');
            },
            "click #light": function() {
				document.documentElement.style.setProperty('--bg-primary-color', 'white');
                document.documentElement.style.setProperty('--fg-color', 'black');
                document.documentElement.style.setProperty('--btn-color', '#696969');
                document.documentElement.style.setProperty('--navbutton-color', 'black');
            },
            "click #bumblebee": function() {
				document.documentElement.style.setProperty('--bg-primary-color', '#0f0f0f');
                document.documentElement.style.setProperty('--fg-color', 'gray');
                document.documentElement.style.setProperty('--btn-color', '#fff933');
                document.documentElement.style.setProperty('--navbutton-color', '#fff933');
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
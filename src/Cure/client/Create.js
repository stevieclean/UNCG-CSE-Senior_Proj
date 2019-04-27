import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import './profile.html';
import './create.html';

import { Template } from "meteor/templating";
import { currPage } from "./main.js";
import {Accounts} from 'meteor/accounts-base';



export default class Create {
	constructor() {
		//this.events = "";
		this._listeners = new EventListener;
		this.template = Template.Create.events({
            "click #create": function() {
				console.log(currPage);
				currPage = "Create";
               Session.set("myTemplate", currPage);
            },
            "click #settings": function() {
				console.log(currPage);
				currPage = "Settings";
               Session.set("myTemplate", currPage);
            },
            'click .close-login': ()=>{
                Session.set('nav-toggle', '');
            },
            'click .login-toggle': ()=> {
                Session.set('nav-toggle', 'open');
                
            },
            'click .logout': ()=> {
                Accounts.logout();
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
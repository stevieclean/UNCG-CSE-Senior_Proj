import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import './hotdial.html';
import { Template } from "meteor/templating";

export default class HotDial {
    constructor() {
		this._listeners = new EventListener;
		this.template = Template.HotDial.events({
			"click #addhdbutton": function() {
				function onSuccess(result) {
					console.log("Success:"+result);
				}	
				function onError(result) {
					console.log("Error:"+result);
				}
			},		
			
			"click #gcstopbutton": function() {
				function onSuccess(result) {
					console.log("Success:"+result);
				}
				  
				function onError(result) {
					console.log("Error:"+result);
				}
				window.plugins.CallNumber.callNumber(onSuccess, onError, '+13365343948', true);
			},
			"click #nchrcbutton": function() {
				function onSuccess(result) {
					console.log("Success:"+result);
				}
				  
				function onError(result) {
					console.log("Error:"+result);
				}
				window.plugins.CallNumber.callNumber(onSuccess, onError, '+13365343948', true);
			},
			"click #conebutton": function() {
				function onSuccess(result) {
					console.log("Success:"+result);
				}
				  
				function onError(result) {
					console.log("Error:"+result);
				}
				window.plugins.CallNumber.callNumber(onSuccess, onError, '+13365343948', true);
			}
		})
    }

    get listeners() {
		console.log("added hot dial listener");
		return this._listeners;
	}

	call

    handleMessage(message) {
		if (message.dest == Destination["HOTDIAL"]) {
			// If true, let's make some phone calls!

			
			
		}
		//if not true the message dies off
	}
}
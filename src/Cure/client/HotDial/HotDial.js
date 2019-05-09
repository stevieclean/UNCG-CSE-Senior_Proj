import EventListener from "../Events/EventListener.js";
import { Destination } from "../Events/Destination.js";
import './hotdial.html';
import { Template } from "meteor/templating";
import { Mongo } from "meteor/mongo";
import { hotDialButtons } from "../../imports/api/hotdialbuttons.js";

var localStorage = new PersistentMinimongo2(hotDialButtons, "userHotDialButtons");

export default class HotDial {
    constructor() {
		this._listeners = new EventListener;
		this.deletetemplateHelpers = Template.deleteButtonsTemplate.helpers({
			hotdialbuttons() {
				return hotDialButtons.find({});
			}
		});
		this.deletetemplateEvents = Template.deleteButtonsTemplate.events({
			"click #buttonToDelete": function(event) {
				var delButtonName = event.target.textContent;
				console.log(delButtonName);
				hotDialButtons.remove({_id: hotDialButtons.find({name: delButtonName}).map(function(field) {return field._id;})[0]});
			}
		})
		this.templateHelpers = Template.dynamicButtonTemplate.helpers({
				hotdialbuttons() {
					return hotDialButtons.find({});
			}
		});
		this.templateEvents = Template.HotDial.events({
			"click #addNewNumber": function() {
				var userName = document.getElementById('nameEntry').value;
				var phoneNumber = document.getElementById('phoneNumberEntry').value;
				if (userName.length == 0 || phoneNumber.length == 0) {
					$('.errorPopover').attr('data-content', 'Name and Phone Number must not be empty.');
					$('.errorPopover').attr('title', 'Error Message');
					$('.errorPopover').popover('show');
					return;
				}
				else if (userName.length > 10) {
					$('.errorPopover').attr('data-content', 'Name must be less than 10 letters long.');
					$('.errorPopover').attr('title', 'Error Message');
					$('.errorPopover').popover('show');
					return;
				}
				//If doesn't have ONLY numbers then throw error
				else if (!(/^\d+$/.test(phoneNumber))) {
					$('.errorPopover').attr('data-content', 'Phone Number must contain ONLY numbers.');
					$('.errorPopover').attr('title', 'Error Message');
					$('.errorPopover').popover('show');
					return;
				}
				else if (phoneNumber.length != 10) {
					$('.errorPopover').attr('data-content', 'Phone Number must be exactly 10 digits with no dashes\/hyphens.');
					$('.errorPopover').attr('title', 'Error Message');
					$('.errorPopover').popover('show');
					return;
				}
				$('.errorPopover').popover('hide');
				phoneNumber = "+1" + phoneNumber;
				console.log(phoneNumber);
				hotDialButtons.insert({
					name: userName,
					number: phoneNumber,
				});
				console.log(userName.length == 0 || phoneNumber.length == 0);
				$('#newButtonModal').modal('hide');
			},

			"click #gcstopbutton": function() {
				function onSuccess(result) {
					console.log("Success:"+result);
				}
				  
				function onError(result) {
					console.log("Error:"+result);
				}
				window.plugins.CallNumber.callNumber(onSuccess, onError, '+13365058122', true);
			},
			"click #nchrcbutton": function() {
				function onSuccess(result) {
					console.log("Success:"+result);
				}
				  
				function onError(result) {
					console.log("Error:"+result);
				}
				window.plugins.CallNumber.callNumber(onSuccess, onError, '+13365438050', true);
			},
			"click #conebutton": function() {
				function onSuccess(result) {
					console.log("Success:"+result);
				}
				  
				function onError(result) {
					console.log("Error:"+result);
				}
				window.plugins.CallNumber.callNumber(onSuccess, onError, '+18007112635', true);
			},
			"click #userButton": function(event) {
				function onSuccess(result) {
					console.log("Success:"+result);
				}
				  
				function onError(result) {
					console.log("Error:"+result);
				}
				var buttonName = event.target.textContent;
				var callNumber = hotDialButtons.find({name: buttonName}).map(function(field) {return field.number;})[0];
				console.log(buttonName + " - " + callNumber);
				window.plugins.CallNumber.callNumber(onSuccess, onError, callNumber, true);
			}
		})
    }

    get listeners() {
		console.log("added hot dial listener");
		return this._listeners;
	}

    handleMessage(message) {
		if (message.dest == Destination["HOTDIAL"]) {
			// If true, let's make some phone calls!

			
			
		}
		//if not true the message dies off
	}
}
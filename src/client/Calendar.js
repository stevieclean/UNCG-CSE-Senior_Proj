import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import './calendar.html';
import { Template } from "meteor/templating";

export default class Calendar {
	constructor() {
		this._listeners = new EventListener;
		this.title = "";
		this.eventLocation = "";
		this.notes = "";
		this.template = Template.Calendar.events({
			"click #sendevent": function() {
				this.title = document.getElementById("titletextarea").value;
				this.notes = document.getElementById("messagetextarea").value;
				var elem1 = document.getElementById("strtmonthdrop");
				var elem2 = document.getElementById("endmonthdrop");
				var elemSDay = document.getElementById("strtdaydrop");
				var elemSYear = document.getElementById("strtyeardrop");
				var elemEDay = document.getElementById("enddaydrop");
				var elemEYear = document.getElementById("endyeardrop");
				var startMonth = 0;
				var startDay = parseInt(elemSDay.options[elemSDay.selectedIndex].value, 10);
				var startYear = parseInt(elemSYear.options[elemSYear.selectedIndex].value, 10);
				var endMonth = 0;
				var endDay = parseInt(elemEDay.options[elemEDay.selectedIndex].value, 10);
				var endYear = parseInt(elemEYear.options[elemEYear.selectedIndex].value, 10);

				var success = function(message) { alert("Success: " + JSON.stringify(message)); };
  				var error = function(message) { alert("Error: " + message); };
				switch (elem1.options[elem1.selectedIndex].value){
					case "Jan":
						startMonth = 0;
						break;
					case "Feb":
						startMonth = 1;
						break;
					case "Mar":
						startMonth = 2;
						break;
					case "Apr":
						startMonth = 3;
						break;
					case "May":
						startMonth = 4;
						break;
					case "June":
						startMonth = 5;
						break;
					case "July":
						startMonth = 6;
						break;
					case "Aug":
						startMonth = 7;
						break;
					case "Sept":
						startMonth = 8;
						break;
					case "Oct":
						startMonth = 9;
						break;
					case "Nov":
						startMonth = 10;
						break;
					case "Dec":
						startMonth = 11;
						break;
				}
				switch (elem2.options[elem2.selectedIndex].value){
					case "Jan":
						endMonth = 0;
						break;
					case "Feb":
						endMonth = 1;
						break;
					case "Mar":
						startMonth = 2;
						break;
					case "Apr":
						endMonth = 3;
						break;
					case "May":
						endMonth = 4;
						break;
					case "June":
						endMonth = 5;
						break;
					case "July":
						endMonth = 6;
						break;
					case "Aug":
						endMonth = 7;
						break;
					case "Sept":
						endMonth = 8;
						break;
					case "Oct":
						endMonth = 9;
						break;
					case "Nov":
						endMonth = 10;
						break;
					case "Dec":
						endMonth = 11;
						break;
				}
				var startDate = new Date(startYear, startMonth, startDay, 0, 0, 0, 0);
				var endDate = new Date(endYear, endMonth, endDay, 0, 0, 0, 0);
				window.plugins.calendar.createEventInteractively(this.title,this.eventLocation,this.notes,startDate,endDate,success,error);
			}
		})
	}

	get listeners() {
		console.log("added calendar listener.");
		return this._listeners;
	}



	handleMessage(message) {
		if (message.dest == Destination["CALENDAR"]) {
			// if is true the calendar handle the message and 
			
		}
		//if not true the message dies off
	}
}
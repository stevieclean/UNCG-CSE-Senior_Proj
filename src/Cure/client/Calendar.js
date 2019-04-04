import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import './calendar.html';
import { Template } from "meteor/templating";
import TinyDatePicker from "tiny-date-picker/dist/tiny-date-picker";

g_startDate = new Date();
g_endDate = new Date();

export default class Calendar {
	constructor() {
		this._listeners = new EventListener;
		this.title = "";
		this.eventLocation = "";
		this.notes = "";
		this.templateHelper = Template.Calendar.events({
			"click #sendevent": function() {
				this.title = document.getElementById("titletextarea").value;
				this.notes = document.getElementById("messagetextarea").value;
				var success = function(message) { alert("Successfully added calendar event!"); };
  				var error = function(message) { alert("Error: " + message); };
				/*
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
				*/
				console.log(g_startDate);
				window.plugins.calendar.createEvent(this.title,this.eventLocation,this.notes,g_startDate,g_endDate,success,error);
			},
			"click #delevent": function() {
				this.title = document.getElementById("titletextarea").value;
				var success = function(message) { alert("Successfully deleted calendar event!"); };
  				var error = function(message) { alert("Error: Could not find message"); };
				window.plugins.calendar.deleteEvent(this.title,null,null,g_startDate,g_endDate,success,error);
			}
		});
		this.templateRender = Template.Calendar.onRendered(function() {
			/*
			$('#datepicker').datepicker({
				uiLibrary: 'bootstrap4',
				icons: {
					rightIcon: '<span class="fa fa-calendar"></span>'
				}
			});
			$('#datepicker2').datepicker({
				uiLibrary: 'bootstrap4',
				icons: {
             rightIcon: '<span class="fa fa-calendar"></span>'
         }
			});
			*/
			const startDate = TinyDatePicker('.startModal', {
			}).on({
				select: function (_, dp) {
					console.log('SELECT ', _, dp.state.selectedDate);
					g_startDate = dp.state.selectedDate;
				  }
			});

			const endDate = TinyDatePicker('.endModal', {	
			}).on({
				select: function (_, dp) {
					console.log('SELECT ', _, dp.state.selectedDate);
					g_endDate = dp.state.selectedDate;
				  }
			});
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
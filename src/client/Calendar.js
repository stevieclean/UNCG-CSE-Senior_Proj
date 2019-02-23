import EventListener from "./Events/EventListener.js";

export default class Calendar {
	constructor(days, months) {
		this.days = days;
		this.months = months;
		this._listeners = new EventListener;
	}

	get listeners() {
		return this._listeners;
	}
	
	printDays() {
		return this.days;
	}
	
	printMonths() {
		return this.months;
	}

	handleMessage(message) {
		if (message.dest == destaddress.calendar) {
			// if is true the calendar handle the message and 
			
		}
		//if not true the message dies off
	}
}
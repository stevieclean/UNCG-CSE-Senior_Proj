import EventMessage from './EventMessage.js'

export default class EventListener {
	constructor() {
		this._listeners = new Array;
	}

	get listeners() {
		return this._listeners;
	}

	set listeners(arr) {
		if (arr instanceof Array) {
			this._listeners.push(arr);
			return;
		}
		console.log("Not an array");
	}

	//Make sure that the classes passed in have the handleMessage() method.
	appendListener(object) {
		if (object.constructor.prototype.handleMessage === 'function') {
			alert("has the correct function.");
		} else if (object.constructor.prototype.handleMessage === 'undefined') {
			alert("Doesn't have this function.");
			return;
		} else {
			console.log("Got an object of type " + object.constructor.name);
			return;
		}
		this.listeners.push(object); //Add the object to back of listeners array.
	}

	removeListener(object) {
		for (i = 0; i < this.listeners.length; i++) {
			if (object.prototype.constructor === this.listeners[i].prototype.constructor) {
				alert("Found the object! Removing...");
				this.listeners.splice(i, 1); //Just remove the one element from listeners.
				return;
			}
		}

	}
	
	fireEvent(message, dest, source) {
		tempMessage = new EventMessage(message, dest, source);
		for (i = 0; i < this.listeners.length; i++) {
			this.listeners.handleMessage(tempMessage); //Fire message to each class
		}
	}
}
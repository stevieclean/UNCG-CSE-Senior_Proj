import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";

export default class Map {
	constructor() {
		this.events = "Bodulus";
		this._listeners = new EventListener;
	}

	get listeners() {
		console.log("added map listener");
		return this._listeners;
	}

	printEvents() {
		return this.events;
	}

	handleMessage(message) {
		if (message.dest == Destination["MAP"]) {
			// if is true the map handle the message
			
			
		}
		//if not true the message dies off
	}

}

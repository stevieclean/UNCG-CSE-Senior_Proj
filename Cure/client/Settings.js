import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";

export default class Settings {
	constructor() {
		this.events = "Bodulus";
		this._listeners = new EventListener;
	}

	get listeners() {
		console.log("added settings listener");
		return this._listeners;
	}

	handleMessage(message) {
		if (message.dest == Destination["SETTINGS"]) {
			// if is true the map handle the message
			
			
		}
		//if not true the message dies off
	}

}
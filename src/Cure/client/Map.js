import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";


<<<<<<< HEAD
//MongoDB Section
Events = new Mongo.Collection('Event');
Locations = new Mongo.Collection('Location');
=======
//SQLite Implementation Section
>>>>>>> 7fc46e0600795cfdc096b6317d4a419aa24f6fa9


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
	
	//var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	
	

}

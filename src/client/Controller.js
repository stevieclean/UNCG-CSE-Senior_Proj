import Calendar from './Calendar.js';
import Map from './Map.js';
import EventListener from './Events/EventListener.js';
import EventMessage from './Events/EventMessage.js';

export default class Controller {
  constructor() {
   this.calendar = new Calendar(30, 12);
   this.map = new Map();
   //this.gui = new GUI();
   this.listeners = new EventListener();

   //Attach each module as a listener to this Controller
   this.listeners.appendListener(this.calendar);
   this.listeners.appendListener(this.map);

   //Append this Controller as a listener to each of the modules
   this.calendar.listeners.appendListener(this);
   this.map.listeners.appendListener(this);
  }

  printCalenderInfo() {
    return this.map.printEvents();
  }

  handleMessage(message) {
    if (message instanceof EventMessage) {
      this.listeners.fireEvent(message, dest, source);
      return;
    }
    console.log("Failed to fire event. Object passed wasn't an EventMessage!");
  }

}

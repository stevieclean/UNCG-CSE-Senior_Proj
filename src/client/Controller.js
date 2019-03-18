import Calendar from './Calendar.js';
import Map from './Map.js';
import HotDial from './HotDial.js';
import EventListener from './Events/EventListener.js';
import EventMessage from './Events/EventMessage.js';

export default class Controller {
  constructor() {
   this.calendar = new Calendar(30, 12);
   this.map = new Map();
   this.hotdial = new HotDial();
   this.listeners = new EventListener();

   //Attach each module as a listener to this Controller
   this.listeners.appendListener(this.calendar);
   this.listeners.appendListener(this.map);
   this.listeners.appendListener(this.hotdial);

   //Append this Controller as a listener to each of the modules
   this.calendar.listeners.appendListener(this);
   this.map.listeners.appendListener(this);
   this.hotdial.listeners.appendListener(this);
  }

  printCalenderInfo() {
    console.log(this.map.printEvents());
  }

  handleMessage(message) {
    if (message instanceof EventMessage) {
      this.listeners.fireEvent(message, dest, source);
      return;
    }
    console.log("Failed to fire event. Object passed wasn't an EventMessage!");
  }

}

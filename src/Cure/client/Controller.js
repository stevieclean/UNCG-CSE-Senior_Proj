import About from './About.js';
import Calendar from './Calendar.js';
import GoalTracker from '../imports/ui/body';
import Map from './Map.js';
import HotDial from './HotDial.js';
import EventListener from './Events/EventListener.js';
import EventMessage from './Events/EventMessage.js';
import Settings from './Settings.js';
import Education from './Education.js';
import Conference from './Conference.js';
import Clock from './Clock.js';
import Profile from './Profile.js';
import Create from './Create.js';
import Signup from './Signup.js';
import Password from './Password.js';
import Notes from './Notes.js';


export default class Controller {
    constructor() {
        this.calendar = new Calendar();
        this.goaltracker = new GoalTracker();
        this.map = new Map();
        this.hotdial = new HotDial();
        this.listeners = new EventListener();
        this.education = new Education();
        this.settings = new Settings();
        this.about = new About();
        this.conference = new Conference();
        this.clock = new Clock();
        this.profile = new Profile();
        this.create = new Create();
        this.signup = new Signup();
        this.password = new Password();
        this.notes = new Notes();

        //Attach each module as a listener to this Controller
        this.listeners.appendListener(this.about);
        this.listeners.appendListener(this.calendar);
        this.listeners.appendListener(this.goaltracker);
        this.listeners.appendListener(this.map);
        this.listeners.appendListener(this.hotdial);
        this.listeners.appendListener(this.settings);
        this.listeners.appendListener(this.education);
        this.listeners.appendListener(this.create);
        this.listeners.appendListener(this.signup);
        /*
        this.listeners.appendListener(this.conference);
        this.listeners.appendListener(this.clock);
        this.listeners.appendListener(this.profile);
        this.listeners.appendListener(this.password);
        this.listeners.appendListener(this.notes);
        */

        //Append this Controller as a listener to each of the modules
        this.about.listeners.appendListener(this);
        this.calendar.listeners.appendListener(this);
        this.goaltracker.listeners.appendListener(this);
        this.map.listeners.appendListener(this);
        this.hotdial.listeners.appendListener(this);
        this.settings.listeners.appendListener(this);
        this.education.listeners.appendListener(this);
        this.conference.listeners.appendListener(this);
        this.clock.listeners.appendListener(this);
        this.profile.listeners.appendListener(this);
        this.create.listeners.appendListener(this);
        this.signup.listeners.appendListener(this);
        this.password.listeners.appendListener(this);
        this.notes.listeners.appendListener(this);

    }

    printCalenderInfo() {
        console.log(this.map.printEvents());
    }

    handleMessage(message) {
        if (message instanceof EventMessage) {
            this.listeners.fireEvent(message);
            return;
        }
        console.log("Failed to fire event. Object passed wasn't an EventMessage!");
    }

}
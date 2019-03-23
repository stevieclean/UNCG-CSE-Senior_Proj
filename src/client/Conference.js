import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import './conference.html';
import { Template } from "meteor/templating";
import { currPage } from "./main.js";


import './conference.html';
import './handouts.html';
import './refresher.html';
import './course.html';

export default class Conference {
    constructor() {
        this._listeners = new EventListener;
        this.template = Template.Conference.events({

            "click #conference": function () {
                currPage = "Conference";
                Session.set("myTemplate", currPage);
            },
            "click #handouts": function () {
                currPage = "Handouts";
                Session.set("myTemplate", currPage);
            },
            "click #refresher": function () {
                currPage = "Refresher";
                Session.set("myTemplate", currPage);
            },
            "click #course": function () {
                currPage = "Course";
                Session.set("myTemplate", currPage);
            }

        });

    }
    get listeners() {
        console.log("added conference listener.");
        return this._listeners;
    }
}
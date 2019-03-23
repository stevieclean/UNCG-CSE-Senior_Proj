import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import './education.html';
import './conference.html';
import { Template } from "meteor/templating";
import { currPage } from "./main.js";

import './onlinecourse.html';
import './conference.html';
import './creditstat.html';
import './spotlight.html';
import './handouts.html';
import './refresher.html';
import './course.html';

export default class Education {
    constructor() {
        this._listeners = new EventListener;
        this.template = Template.Education.events({
                    "click #onlinecourse": function () {
                        console.log(currPage);
                        currPage = "Onlinecourse";
                        Session.set("myTemplate", currPage);
                    },
                    "click #conference": function () {
                        currPage = "Conference";
                        Session.set("myTemplate", currPage);
                    },
                    "click #creditstat": function () {
                        currPage = "CreditStat";
                        Session.set("myTemplate", currPage);
                    },
                    "click #spotlight": function () {
                        currPage = "Spotlight";
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
            console.log("added education listener.");
            return this._listeners;
        }    
}
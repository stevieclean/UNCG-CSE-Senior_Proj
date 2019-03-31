import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import './education.html';
import './handouts.html';
import './refresher.html';
import './course.html'
import { Template } from "meteor/templating";
import { currPage } from "./main.js";

import './onlinecourse.html';
import './conference.html';
import './creditstat.html';
import './spotlight.html';
import './handouts.html';
import './refresher.html';
import './course.html';
import './cone.html';
import './library.html';
import './contact.html';
import './multi.html';
import './thereach.html';
import './pharmacy.html';
import './student.html';
import './clinical.html';
import './residency.html';

export default class Education {
    constructor() {
        this._listeners = new EventListener;
        // this.event = document.getElementById("conference").onclick = function() {
        //     currPage = "Conference";
        //     Session.set("myTemplate", currPage);
        // }
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
                    },
                    "click #cone": function () {
                        currPage = "Cone";
                        Session.set("myTemplate", currPage);
                    },
                    "click #library": function () {
                        currPage = "Library";
                        Session.set("myTemplate", currPage);
                    },
                    "click #contact": function () {
                        currPage = "Contact";
                        Session.set("myTemplate", currPage);
                    },
                    "click #multi": function () {
                        currPage = "Multi";
                        Session.set("myTemplate", currPage);
                    },
                    "click #thereach": function () {
                        currPage = "Thereach";
                        Session.set("myTemplate", currPage);
                    },
                    "click #pharmacy": function () {
                        currPage = "Pharmacy";
                        Session.set("myTemplate", currPage);
                    },
                    "click #student": function () {
                        currPage = "Student";
                        Session.set("myTemplate", currPage);
                    },
                    "click #clinical": function () {
                        currPage = "Clinical";
                        Session.set("myTemplate", currPage);
                    },
                    "click #residency": function () {
                        currPage = "Residency";
                        Session.set("myTemplate", currPage);
                    }

                });

        }
        get listeners() {
            console.log("added education listener.");
            return this._listeners;
        }    
}
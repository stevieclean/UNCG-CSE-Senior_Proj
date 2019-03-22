import EventListener from "./Events/EventListener.js";
import { Destination } from "./Events/Destination.js";
import { Session } from 'meteor/session';
import './education.html';
import { Template } from "meteor/templating";
import { currPage } from "./main.js";

import './onlinecourse.html';
import './conference.html';
import './creditstat.html';

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
                        currPage = "Conference";//Change to name of template
                        Session.set("myTemplate", currPage);
                    },
                    "click #creditstat": function () {
                        currPage = "CreditStat";
                        Session.set("myTemplate", currPage);
                    }

                });

        }
        get listeners() {
            console.log("added calendar listener.");
            return this._listeners;
        }    
}
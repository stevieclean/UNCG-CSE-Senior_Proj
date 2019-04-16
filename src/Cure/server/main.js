//import the goals collection to the server.
import '../imports/api/goals.js';
import '../imports/api/hotdialbuttons.js';
//End import for the goals
import { Meteor } from 'meteor/meteor';
//import mapdatabase data
import '../imports/api/mapdatabase.js';
import {Mongo} from 'meteor/mongo';
// export constr Tasks = new Mongo.Collection('tasks');

Meteor.startup(() => {});
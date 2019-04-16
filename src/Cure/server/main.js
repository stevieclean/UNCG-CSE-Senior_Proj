//import the goals collection to the server.
import '../imports/api/goals.js';
//End import for the goals
import { Meteor } from 'meteor/meteor';
// import './imports/api/tasks.js';
import {Mongo} from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { AccountsServer } from 'meteor/accounts-base';

SimpleSchema.debug = true;

Meteor.startup(() => {});
// Ensuring every user has an email address, should be in server-side code
//Accounts = new AccountsServer(Meteor.user)
Accounts.validateNewUser((user) => {
    new SimpleSchema({
      _id: { type: String },
      emails: { type: Array },
      'emails.$': { type: Object },
      'emails.$.address': { type: String },
      'emails.$.verified': { type: Boolean },
      createdAt: { type: Date },
      services: { type: Object, blackbox: true }
    }).validate(user);
  
    // Return true to allow user creation to proceed
    return true;
  });
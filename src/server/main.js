import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
Todos = new Mongo.Collection("todos");
});

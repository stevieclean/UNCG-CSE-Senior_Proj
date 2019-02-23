import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import Controller from './Controller.js';
import './main.html';
import { Destination } from './Events/Destination.js';

Todos = new Mongo.Collection("todos");
var controller = new Controller();
console.log(Destination['GOALTRACKER']);

Session.set("todos", [
{
	label: "End it all",
	done: true
},
{
	label: "Skyrocket to the top"
},
{
	label: "Finish college"
}
]);

Template.todosList.helpers({
	todos: function () {
		return Todos.find();
	}
});

Template.todosList.events({
	"click .add-todo": function () {
		Todos.insert({
			label: "new todo",
			createdAt: new Date()
		})
	}
});

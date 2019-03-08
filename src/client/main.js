import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import Controller from './Controller.js';
import './main.html';
import { Destination } from './Events/Destination.js';

var controller = new Controller();
console.log(Destination['GOALTRACKER']);
Todos = new Mongo.Collection("todos");

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

Template.todo.events({
	"click input": function () {
		var isDone=Todos.findOne({_id: this._id}).done;
		Todos.update({_id: this._id}, {$set: {done: !isDone}});
	}
})
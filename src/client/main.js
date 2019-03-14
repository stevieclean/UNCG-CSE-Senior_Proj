import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
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
	"click #onedial": function () {
		function onSuccess(result) {
			console.log("Success:"+result);
		}
		  
		function onError(result) {
			console.log("Error:"+result);
		}
		window.plugins.CallNumber.callNumber(onSuccess, onError, '+13367720649', true);
	}
});

Template.todo.events({
	"click input": function () {
		var isDone=Todos.findOne({_id: this._id}).done;
		Todos.update({_id: this._id}, {$set: {done: !isDone}});
	}
})
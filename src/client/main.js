import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import Controller from './Controller.js';
import './main.html';
import './newpage.html';
import { Destination } from './Events/Destination.js';

var controller = new Controller();
console.log(Destination['GOALTRACKER']);
Todos = new Mongo.Collection("todos");
currPage = "MainPage";
	
//For changing the current page
Session.set({"myTemplate" : currPage});

Template.dynamicTemplate.helpers({
	page: function () {
		return Session.get("myTemplate");
	}
});

Template.buttons.events({
	"click #location": function () {
		currPage = "something";
		Session.set("myTemplate", currPage);
	},
	"click #calendar": function () {
		currPage = "something";//Change to name of template
		Session.set("myTemplate", currPage);
	},
	"click #location": function () {
		currPage = "something";
		Session.set("myTemplate", currPage);
	},
	"click #location": function () {
		currPage = "something";
		Session.set("myTemplate", currPage);
	}
});

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
//import react
import React from 'react';
//import the meteor libraries
import { Meteor } from 'meteor/meteor';
//import the dom.
import { render } from 'react-dom';
//pull the ui from the folder.
import App from '../imports/ui/App.jsx';

//start the app.
Meteor.startup(() => {

  render(<App />, document.getElementById('render-target'));

});

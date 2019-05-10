import { Mongo } from 'meteor/mongo';
import { accounts } from '/imports/api/account';
import {Accounts} from 'meteor/accounts-base';
//Create a collection of goals.
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Template } from "meteor/templating";
import { currPage } from "../main.js";
import './create.html';

var acct = document.getElementById('email').value;
var pwd = document.getElementById('password').value;
var myLogoutFunc = function(){
    console.log('hello');
    Session.set('nav-toggle', '');
    FlowRouter.go('/');
}
Accounts.configure({
    
    // Behavior
    confirmPassword: false,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Custimizing Routes
    defaultTemplate: 'Auth_page',
    defaultLayout: 'App_body',
    defaultContentRegion: 'main',
    defaultLayoutRegions: {},

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc,
    preSignUpHook: myPreSubmitFunc,
    postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});

Accounts.addFields([
    {
        _id: 'firstname',
        type: 'text',
        displayName: 'First Name',
        required: false,
        minLength: 6,
        re: /(?=.*[a-z])(?=.*[A-Z])/,
        errStr: '1 lowercase and 1 uppercase',
    }
]);

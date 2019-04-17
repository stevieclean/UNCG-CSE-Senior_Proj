import { Mongo } from 'meteor/mongo';
import { accounts } from '/imports/api/account';

export const accounts = new Mongo.Collection('accounts');

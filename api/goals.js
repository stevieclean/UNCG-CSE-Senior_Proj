//import mongo DB
import { Mongo } from 'meteor/mongo';
//create the goals collection
export const Goals = new Mongo.Collection('goals');

//import mongoDB
import { Mongo } from 'meteor/mongo';
//Create a collection of goals.
export const Goals = new Mongo.Collection('goals');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventID: {type:String , required:true},
    eventName: {type:String , required:true},
    date: {type:Date , required: true},
    timeSlot :{type:String , required:true},
    seatsCount : {type:Number , required: true},
    price : {type:String , required: true},

  
},{
    timestamp:true,
});

const Event = mongoose.model('Event' , eventSchema);

module.exports = Event;
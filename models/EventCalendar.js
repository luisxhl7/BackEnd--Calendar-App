const { Schema, model } = require("mongoose");

const EventCalendarSchema = Schema({
    title:{
        type: String,
        required: true
    },
    notes:{
        type: String,
    },
    dateInit:{
        type: Date,
        required: true,
    },
    dateEnd:{
        type: Date,
        required: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }

})

EventCalendarSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = model('EventCalendar', EventCalendarSchema)
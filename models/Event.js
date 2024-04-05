const { Schema, model } = require("mongoose");

const EventSchema = Schema({
    title:{
        type: String,
        require: true
    },
    notes:{
        type: String,
    },
    dateInit:{
        type: Date,
        require: true,
    },
    dateEnd:{
        type: Date,
        require: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    }

})

module.exports = model('Event', EventSchema)
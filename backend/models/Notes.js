const mongoose= require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type:String,
        default:"general"
    },
    date: {
        type: Date,
        default: Date.now
    },
});
const Notes = mongoose.model('user', noteSchema);

module.exports = Notes;
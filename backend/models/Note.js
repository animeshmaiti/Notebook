const mongoose= require("mongoose");
const { Schema } = mongoose;

// Mongoose.Schema.Types.ObjectId is a special schema type used by Mongoose for storing unique values
const noteSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
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
const Note = mongoose.model('note', noteSchema);

module.exports = Note;
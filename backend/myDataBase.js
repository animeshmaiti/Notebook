const mongoose = require('mongoose');
const mongooseUri = 'mongodb://localhost:27017/inotebook';
const connectToMongo = async () => {
    await mongoose.connect(mongooseUri);
    console.log('Connected to Mongo');
}

module.exports = connectToMongo;
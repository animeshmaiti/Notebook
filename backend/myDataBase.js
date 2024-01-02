const mongoose = require('mongoose');
const mongooseUri = 'mongodb://localhost:27017';
const connectToMongo = async () => {
    await mongoose.connect(mongooseUri);
    console.log('Connected to Mongo');
}

module.exports = connectToMongo;
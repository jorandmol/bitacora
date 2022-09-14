const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_ID}.mongodb.net/?retryWrites=true&w=majority`;
const options = { dbName: process.env.NODE_ENV };

mongoose.connect(uri, options)
    .then(() => console.log('✅ Successfully connected to MongoDB'))
    .catch((err) => console.error('⛔ Ups! Something went wrong with MongoDB connection: ' + err.message));
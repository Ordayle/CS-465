require('dotenv').config();
const mongoose = require('mongoose');
const Trip = require('./app_api/models/trips');
const tripsData = require('./trips.json');

const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travlr';

mongoose.connect(dbURI)
  .then(async () => {
    console.log('MongoDB connected for seeding');

    await Trip.deleteMany({});
    console.log('Existing trips removed');

    await Trip.insertMany(tripsData);
    console.log('Trips successfully seeded');

    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Seeding error:', err);
    mongoose.connection.close();
  });


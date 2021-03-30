const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

mongoose
    .connect(MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false 
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
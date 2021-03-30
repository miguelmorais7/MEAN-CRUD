const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

//require('./database');
const app = require('./app');

mongoose
    .connect(MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: false 
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));


//const PORT = process.env.PORT || 5000;
app.listen(app.get('port'), () => console.log(`Server running at port ${app.get('port')}`));

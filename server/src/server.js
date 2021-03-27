const app = require('./app');

//const PORT = process.env.PORT || 5000;
app.listen(app.get('port'), () => console.log(`Server running at port ${app.get('port')}`));

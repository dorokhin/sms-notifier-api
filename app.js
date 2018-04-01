require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV !== 'production') {
    app.set('json spaces', 2);
}

// Routes
app.use(require('./routes'));

// Default error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.end(res.status);
});

// Starting
const server = app.listen(process.env.PORT || 3000, () => {
    console.log("Server listening on port " + server.address().port)
});



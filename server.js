const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    User = require('./users-api/models/model'),
    routes = require('./users-api/routes/route'),
    bodyParser = require('body-parser'),
    router = express.Router();
    swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);

routes(app);

app.use(function(req, res, next) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('user data RESTful API server started on: ' + port);

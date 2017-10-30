const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./api'));







app.use((err, req, res, next) => {
  res.status(404).json(err.message);
});

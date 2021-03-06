const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const port = 1313
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', '/public')));

app.use('/api', require('./api'));

app.get('*', function (req, res) {
  // console.log('\n\n---DIRNAME----', __dirname)
  res.sendFile(path.join(__dirname, '..', '/public/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(port, ()=>{
  console.log('server listening')
});

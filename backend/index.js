const express = require('express');
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Set up express
const app = express();

// Set up express middleware
app.use(jsonParser);
app.use(express.json());
app.use(cors());
app.use('/', router);

// Set up port data
port = 8080;

// Set up test GET endpoint
router.get('/api', function (req, res) {
  return res.send(`Get Hello World!`);
});

// Set up test GET endpoint
router.get('/api/test', function (req, res) {
  return res.send(`Get Hello World Test!`);
});

// Set up test POST endpoint
router.post('/api/test', function (req, res) {
  return res.send(`Post Hello World Test!`);
});

// Use web router
router.use('/', require('./web-router'));

// Launch app
app.listen(port, () => {
  console.log(`Example app listening at ${port}.`);
});

// Export app
module.exports = app;

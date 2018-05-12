require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
const geocode = require('./middleware/geocode');
const timezone = require('./middleware/timezone');

// Controllers
const {
	createLocation
} = require('./controllers/location');

app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.post('/location/', [geocode, timezone], createLocation);

app.listen(3000, () => console.log('Listening on port 3000'));

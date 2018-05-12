require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
const geocode = require('./middleware/geocode');
const timezone = require('./middleware/timezone');

// Controllers
const {
	createLocation,
	getAllLocations
} = require('./controllers/location');

app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Location Routes
app.post('/location/', [geocode, timezone], createLocation);
app.get('/location/', getAllLocations);

app.listen(3000, () => console.log('Listening on port 3000'));

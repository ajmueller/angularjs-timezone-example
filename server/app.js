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
const {
	createEvent,
	getAllEvents,
	getEvent
} = require('./controllers/event');

app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Location Routes
app.post('/location/', [geocode, timezone], createLocation);
app.get('/location/', getAllLocations);

// Event Routes
app.post('/event/', createEvent);
app.get('/event/', getAllEvents);
app.get('/event/:id/', getEvent);

app.listen(3000, () => console.log('Listening on port 3000'));

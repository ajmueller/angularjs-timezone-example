require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Middleware
const geocode = require('./middleware/geocode');
const timezone = require('./middleware/timezone');

// Controllers
const {
	createLocation,
	getAllLocations,
	getEventsForLocation,
	getLocation
} = require('./controllers/location');
const {
	createEvent,
	getAllEvents,
	getEvent
} = require('./controllers/event');

app.use(bodyParser.json());

// Client
app.use(express.static(path.join(__dirname, '../client')));

// Location Routes
app.post('/locations/', [geocode, timezone], createLocation);
app.get('/locations/', getAllLocations);
app.get('/locations/:id/', getLocation);
app.get('/locations/:id/events/', getEventsForLocation);

// Event Routes
app.post('/events/', createEvent);
app.get('/events/', getAllEvents);
app.get('/events/:id/', getEvent);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error Handlers

// Development - will print stacktrace
if (app.get('env') === 'local' || app.get('env') === 'development') {
	app.use((err, req, res, next) => {
		res.status(err.status || 500)
			.json({
				message: err.message,
				error: err
			});
	});
}

// Production - no stacktraces leaked to user
app.use((err, req, res, next) => {
	if (err.name === 'UnauthorizedError') {
		res.status(401).send('You are not authorized to view that content.');
	}

	res.status(err.status || 500)
		.send('There was an error processing your request');
});

app.listen(3000, () => console.log('Listening on port 3000'));

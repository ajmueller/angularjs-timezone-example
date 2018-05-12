const { Event, Location } = require('../models');

module.exports = {
	createEvent,
	getAllEvents,
	getEvent
};

async function createEvent(req, res) {
	try {
		const event = await Event.create(req.body);

		res.status(201).json(event);
	}
	catch(err) {
		console.log(err);
	}
}

async function getAllEvents(req, res) {
	try {
		const events = await Event.findAll();

		res.json(events);
	}
	catch(err) {
		console.log(err);
	}
}

async function getEvent(req, res) {
	try {
		let options = {};

		if (req.query.include === 'Location') {
			options.include = [{
				model: Location
			}];
		}

		const event = await Event.findById(req.params.id, options);

		res.json(event);
	}
	catch(err) {
		console.log(err);
	}
}

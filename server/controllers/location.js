const { Event, Location } = require('../models');

module.exports = {
	createLocation,
	getAllLocations,
	getEventsForLocation,
	getLocation
};

async function createLocation(req, res) {
	try {
		const location = await Location.create(req.body);

		res.status(201).json(location);
	}
	catch(err) {
		console.log(err);
	}
}

async function getAllLocations(req, res) {
	try {
		const locations = await Location.findAll();

		res.json(locations);
	}
	catch(err) {
		console.log(err);
	}
}

async function getLocation(req, res) {
	try {
		const location = await Location.findById(req.params.id);

		res.json(location);
	}
	catch(err) {
		console.log(err);
	}
}

async function getEventsForLocation(req, res) {
	try {
		const events = await Event.findAll({
			where: {
				LocationId: req.params.id
			}
		});

		res.json(events);
	}
	catch(err) {
		console.log(err);
	}
}

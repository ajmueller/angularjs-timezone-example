const { Location } = require('../models');

module.exports = {
	createLocation,
	getAllLocations
};

async function createLocation(req, res) {
	try {
		const location = await Location.create(req.body);

		res.status(201).json(location);
	}
	catch(err) {
		res.json(err);
	}
}

async function getAllLocations(req, res) {
	try {
		const locations = await Location.findAll();

		res.json(locations);
	}
	catch(err) {
		res.json(err);
	}
}

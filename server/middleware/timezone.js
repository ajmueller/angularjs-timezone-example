const googleMapsClient = require('@google/maps').createClient({
	key: process.env.GOOGLE_API_KEY,
	Promise: Promise
});

module.exports = async (req, res, next) => {
	try {
		const location = req.body.location.coordinates;
		const language = 'en';
		const timezoneName = await googleMapsClient.timezone({ location, language }).asPromise();

		if (timezoneName.json) {
			req.body.timezone = timezoneName.json.timeZoneId;
		}

		return next();
	}
	catch(err) {
		next(err);
	}
};

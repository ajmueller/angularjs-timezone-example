const googleMapsClient = require('@google/maps').createClient({
	key: process.env.GOOGLE_API_KEY,
	Promise: Promise
});

module.exports = async (req, res, next) => {
	try {
		const address = `${req.body.streetAddress} ${req.body.streetAddress2 || ''} ${req.body.city}, ${req.body.state} ${req.body.zipCode}`;
		const geocodedAddress = await googleMapsClient.geocode({ address }).asPromise();

		if (geocodedAddress) {
			const coordinates = geocodedAddress.json.results[0].geometry.location;

			req.body.location = {
				type: 'Point',
				coordinates: [
					coordinates.lat,
					coordinates.lng
				],
				crs: {
					type: 'name',
					properties: {
						name: 'EPSG:4326'
					}
				}
			};
		}

		return next();
	}
	catch(err) {
		next(err);
	}
};

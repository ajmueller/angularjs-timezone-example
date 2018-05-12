module.exports = (sequelize, DataTypes) => {
	const Location = sequelize.define('Location', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		streetAddress: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		streetAddress2: DataTypes.STRING(100),
		city: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		state: {
			type: DataTypes.STRING(2),
			allowNull: false
		},
		zipCode: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		location: DataTypes.GEOMETRY('POINT', 4326),
		timezone: {
			type: DataTypes.STRING(50),
			defaultValue: 'America/Los_Angeles'
		},
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	});

	return Location;
};

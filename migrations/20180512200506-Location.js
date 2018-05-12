'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		const model = {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
			},
			streetAddress: {
				type: Sequelize.STRING(100),
				allowNull: false
			},
			streetAddress2: Sequelize.STRING(100),
			city: {
				type: Sequelize.STRING(50),
				allowNull: false
			},
			state: {
				type: Sequelize.STRING(2),
				allowNull: false
			},
			zipCode: {
				type: Sequelize.STRING(10),
				allowNull: false
			},
			location: Sequelize.GEOMETRY('POINT', 4326),
			timezone: {
				type: Sequelize.STRING(50),
				defaultValue: 'America/Los_Angeles'
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE
		};

		return queryInterface.createTable('Locations', model);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Locations');
	}
};

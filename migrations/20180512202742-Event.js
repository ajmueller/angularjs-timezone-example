'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		const model = {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
			},
			datetime: Sequelize.DATE,
			timezoneOffset: Sequelize.STRING(5),
			LocationId: {
				type: Sequelize.UUID,
				references: {
					model: 'Locations',
					key: 'id'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			createdAt: Sequelize.DATE,
			updatedAt: Sequelize.DATE
		};

		return queryInterface.createTable('Events', model);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Events');
	}
};

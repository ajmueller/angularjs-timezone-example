module.exports = (sequelize, DataTypes) => {
	const Event = sequelize.define('Event', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
		datetime: DataTypes.DATE,
		timezoneOffset: DataTypes.STRING(5),
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	});

	Event.associate = models => {
		models.Event.belongsTo(models.Location, {
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Event;
};

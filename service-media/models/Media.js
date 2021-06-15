module.exports = (queryInterface, Sequelize) => {
    const Media = queryInterface.define('Media', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: {
            field:'created_at',
            type: Sequelize.DATE,
            allowNull: false
        },

        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
            allowNull: false
        }
    },{
        tableName:'media'
    });

    return Media;
}
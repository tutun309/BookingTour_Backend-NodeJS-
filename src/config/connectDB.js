const { Sequelize } = require('@sequelize/core');

const sequelize = new Sequelize('bookingtravel', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

let connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectDatabase;
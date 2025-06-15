require('dotenv').config();

const { PORT, DB_URI } = process.env;

if (!PORT) {
    throw new Error('PORT is not specified!');
}

if (!DB_URI) {
    throw new Error('DB_URI is not specified!');
}

module.exports = { PORT, DB_URI };
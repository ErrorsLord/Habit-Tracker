const { connect } = require('mongoose');
const app = require('./app.js');
const { PORT, DB_URI } = require('./config.js');

process.on('unhandledRejection', (reason) => {
    console.error(`UNHANDLED REJECTION: ${reason}`);
    process.exit(1);
});

process.on('uncaughtException', (error) => {
    console.error(`UNCAUGHT EXCEPTION: ${error}`);
    process.exit(1);
});

async function startServer() {
    try {
        await connect(DB_URI);
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error(`Failed to start server: ${error.message}`);
        process.exit(1);
    }
};

startServer();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too much requests'
}));
app.use(helmet());
app.use(express.json({ limit: '10kb', type: 'application/json' }));
app.use(cors());

module.exports = app;
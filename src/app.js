const express = require('express');
const bodyParser = require('body-parser');
const audioRoutes = require('./routes/audioRoutes');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use('/api/audio', audioRoutes);

module.exports = app;
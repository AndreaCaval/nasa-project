const http = require('http');
require('dotenv').config()
const app = require('./app');
const mongoose = require('mongoose');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');
const PORT = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGO_URL

const server = http.createServer(app);

mongoose.connection.on('open', () => console.log('Mongo DB connection ready.'));

mongoose.connection.on('error', (err) => console.log(err));

async function startServer() {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    });
}

startServer();


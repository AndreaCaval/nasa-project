const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const { loadPlanetsData } = require('./models/planets.model');
const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:5H6sScAVxUV05wGu@nasacluster.kmk2q3e.mongodb.net/nasa?retryWrites=true&w=majority'

const server = http.createServer(app);

mongoose.connection.on('open', () => console.log('Mongo DB connection ready.'));

mongoose.connection.on('error', (err) => console.log(err));

async function startServer() {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log('listening on port ' + PORT);
    });
}

startServer();


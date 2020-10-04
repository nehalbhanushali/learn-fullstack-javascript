import config from './config';
import fs from 'fs';
import express from 'express';

const server = express();

// routing
// TODO: manage group of routes in their own module
// e.g: All API requests to be managed in /api/index.js
server.get('/', (req, res) => {
    res.send('Hello Express');
 });

// use static middleware to automatically serve static assets like this about.html
// public is where we want to host the static assets on the file system
// NOTE: njinx or something alike would be the actual choice in a production environment
// static middleware used to keep things simple
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Listening on port', config.port);
});
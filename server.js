import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

// routing
server.get('/', (req, res) => {
    res.send('Hello Express');
 });

// Now use it like express middleware
// args: 1. Route prefix, 2. apiRouter
server.use('/api', apiRouter);

// use static middleware to automatically serve static assets like this about.html
// public is where we want to host the static assets on the file system
// NOTE: njinx or something alike would be the actual choice in a production environment
// static middleware used to keep things simple
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Listening on port', config.port);
});
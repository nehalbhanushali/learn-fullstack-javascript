import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

// express will look for .ejs templates  in the views folder
server.set('view engine', 'ejs');

// routing
server.get('/', (req, res) => {
    // res.send('Hello Express');
    // TODO: Instead of these strings
    // use dynamic template language like EJS
    // a new dependency to be brought in 
    // res.render('index');
    // or pass variables
    res.render('index', {
       content: 'Hello Express and <em>EJS</em>!'
    });

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
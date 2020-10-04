import config from './config';
import fs from 'fs';
import express from 'express';

const server = express();

// routing
server.get('/', (req, res) => {
    res.send('Hello Express');
 });

 // routing
server.get('/about.html', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    });
 });

server.listen(config.port, () => {
    console.info('Listening on port', config.port);
});
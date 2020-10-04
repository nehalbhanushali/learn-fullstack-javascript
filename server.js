// import https from 'https';
// import http from 'http';
import config from './config';
import express from 'express';

// HTTPS
/* 
https.get('https://www.lynda.com', res => {
  console.log('Response status code: ', res.statusCode);

  res.on('data', chunk => {
     console.log(chunk.toString());
  });
});

// HTTP
const server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
    res.write('Hello HTTP!\n');

    setTimeout(() => {
        res.write('I can stream!\n');
        res.end();
    }, 9000);
});
*/

//

const server = express();

// routing
server.get('/', (req, res) => {
    res.send('Hello Express');
 });

 // routing
server.get('/about.html', (req, res) => {
    res.send('About Express!');
 });

server.listen(config.port, () => {
    console.info('Listening on port', config.port);
});
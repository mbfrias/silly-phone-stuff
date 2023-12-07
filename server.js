// so today on visual studio code, i will be creating a server.js file

// i will be running this file ON MY IPHONE!! HOW?? ill never tell you]

// i will be using the express framework to create a server
const http = require('http');
const https = require('https');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 80;
const sport = 443; // lol phyiscal activity reference
// okay lets import the certs
const options = {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'))
};


// RIGHT now lets make it respond to a get request by saying hello world

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// now lets make it listen on port 80
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// now lets make it listen on port 443
// but first lets make a https server
// but wait, we need a certificate
// so lets make one using mkcert
// (this is all done on the cli lol)
// now lets make a https server

https.createServer(options, app).listen(sport, () => {
    console.log(`Example app listening at https://localhost:${sport}`)
});

// all done! now lets run it on my iphone


// i should probably make a git repo for this so i can clone it on my iphone
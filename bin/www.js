let config = require('../config.json')

let app = require('../app');
let debug = require('debug')('peterdev:server');
let http = require('http');
let https = require('https');

let fs = require("fs");

let argv = require('minimist')(process.argv.slice(2));

let port = argv['p'];

app.set('port', port);

/**
 * Create HTTP and HTTPS server.
 */

// const options = {
//     cert: fs.readFileSync('/etc/letsencrypt/live/domain-or-subdomain.in/fullchain.pem'),
//     key: fs.readFileSync('/etc/letsencrypt/live/domain-or-subdomain.in/privkey.pem')
// };

let serverhttps = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */

serverhttps.listen(port);
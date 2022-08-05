let config = require('../config.json')

let app = require('../app');
let debug = require('debug')('peterdev:server');
let http = require('http');

let argv = require('minimist')(process.argv.slice(2));

let port = argv['p'];

app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
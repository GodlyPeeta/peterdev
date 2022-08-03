#!/usr/bin/env node

/**
 * Module dependencies.
 */

// import Debug from 'debug'
// const debug = Debug("csaaresttest:server")
// import * as app from '../app.js'
// import * as http from 'http'

var config = require('../config.json')

var app = require('../app');
var debug = require('debug')('peterdev:server');
var http = require('http');

let port = config.port

app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
// AppController file

// Imports

// Imports Modules

// Imports components

// Variables
var service = require('../services/AppService').appService;
var server = require('../services/WebService').webService;

// Constant
const script = '';

const controller = { 
    script: script,
    service: service.service,
    server: server.server
};
// Functions

// Exports
module.exports.controller = controller;
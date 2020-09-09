// AppModel file

// Imports

// Imports Modules

// Imports components

// Variables
var navbar = require('../public/javascripts/header').navbar;
var footer = require('../public/javascripts/footer').footer;
var homepage = require('../public/javascripts/home').homepage;
var documentation = require('../public/javascripts/documentation').documentation;
var contacts = require('../public/javascripts/contacts').contacts;
var controller = require('../controllers/AppController').controller;

// Constant
const model = { 
                title: 'API Quark Up V1.0.0',
                description: 'API for development and design of Application',
                version: '1.0.0',
                header: navbar.nav,
                footer: footer.foot,
                home: homepage.home,
                doc: documentation.doc,
                cont: contacts.cont,
                service: controller.script
            };

// Functions

// Exports      
module.exports.model = model;
'use strict';
//Global Event Pool (shared by all modules)

const events = require('events');  // it is already exist in node no need for npm install

// I am exporting the same instance
// same events pool is exported
module.exports = new events();

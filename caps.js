'use strict';
// Main Hub Application >>> node caps.js

const events = require('./events');

require('./driver');
require('./vendor');
// registration of the listeners
events.on('pickup', (payload) => log('pickup', payload));
events.on('in-transit', (payload) => log('in-transit', payload));
events.on('delivered', (payload) => log('delivered', payload));

function log(event, payload) {
  let time = new Date();
  console.log('EVENT --> ', { event, time, payload });
}

module.exports = log;

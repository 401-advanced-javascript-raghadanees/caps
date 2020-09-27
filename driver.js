'use strict';

const events = require('./events.js');

events.on('pickup', (payload) => pickUpFun(payload));

/**
 * 
 * @param {obj} payload 
 */

function pickUpFun(payload) {
  /**
     * this is for console the DRIVER picked up the order and then emit in-transit
     */
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    events.emit('in-transit', payload);
  }, 1000);

  /**
     * this is for console the DRIVER delivered up the order and then emit delivered
     */
  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderId}`);
    events.emit('delivered', payload);
  }, 3000);

}

module.exports = pickUpFun;
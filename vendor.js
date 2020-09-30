// // Vendor Module
// 'use strict';

// const events = require('./events.js');
// let storeName = 'myStore';  // we can put it in env 
// let faker = require('faker'); /// npm i faker

// /**
//  * this fun is in order to create fake order simulate a new one every 5 seconds
//  */
// function createOrder() {
//   setTimeout(() => {

//     let order = {
//       storeName: storeName,
//       orderId: faker.random.number(),
//       customer: faker.name.findName(),
//       address: faker.address.city(),
//       phoneNumber: faker.phone.phoneNumber(),
//       //https://www.npmjs.com/package/faker
//     };

//     events.emit('pickup', order); ///Emit a ‘pickup’ event and attach the fake order as payload

//   }, 5000); // this for simulate a new customer order every 5 seconds
// }

// createOrder();
// /**
//  * listen to delivered and excute thank fuction
//  */
// events.on('delivered', (payload) => thanksFuc(payload));



// function thanksFuc(payload) {
//   console.log(`VENDOR: Thank you for delivering ${payload.orderId} :) `);
// }

// module.exports = thanksFuc;
'use strict';

const io = require('socket.io-client');
// const caps = io.connect('http://localhost:4000');

const caps = io.connect('http://localhost:4000/caps');

require('dotenv').config();
const faker = require('faker');

const storeName = process.env.STORE_NAME || 'myStore';
caps.emit('join', (storeName) );

caps.on('delivered', (payload) => {

    console.log(`VENDOR:  : thank you for delivering :) ${payload.orderId}`);

})


function createOrder() {
    setTimeout(() => {

        let orderObj = {
            storeName: storeName,
            orderId: faker.random.number(),
            customer: faker.name.findName(),
            address: faker.address.city(),
            phoneNumber: faker.phone.phoneNumber(),
            //https://www.npmjs.com/package/faker
        };
        caps.emit('pickup',orderObj);

       
    }, 5000); // this for simulate a new customer order every 5 seconds
}
createOrder();


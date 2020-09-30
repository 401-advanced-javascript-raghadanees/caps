'use strict';

const net = require('net');
require('dotenv').config();
const faker = require('faker');
// const thanksFuc = require('../vendor');
const storeName = process.env.STORE_NAME || 'myStore';

const client = new net.Socket(); // create a socket connection 
// connect it to CAPS-server.js : localhost port: 4000;

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

client.connect(port, host, () => {
    console.log(" vendor client is connected ... ")
});
///When data arrives, parse it (it should be JSON) and look for the event property
client.on('data', (data) => {
    let jsonEventData = JSON.parse(data);
    console.log('jsonEventData--->',jsonEventData )
    console.log('jsonEventData.message',new Date().toLocaleTimeString(), jsonEventData.message);

    if (jsonEventData.event === 'delivered') {
        thanksFuc();
        // console.log(`VENDOR: Thank you for delivering ${jsonEventData.payload.orderId} :) `);
    }
});

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
        const message = JSON.stringify({
            event: 'pickup',
            payload: orderObj
        });
        
        console.log('message ,, JSON.stringify ', message);
        client.write(message);
        createOrder();
    }, 5000); // this for simulate a new customer order every 5 seconds
}


client.on('close', function () {
    console.log("connection is closed!!");
});

client.on('error', (err) => console.log('Client Error ', err.message));


function thanksFuc(payload) {
    console.log(`VENDOR: Thank you for delivering ${payload.orderId} :) `);
}


module.exports = thanksFuc;
module.exports = createOrder;
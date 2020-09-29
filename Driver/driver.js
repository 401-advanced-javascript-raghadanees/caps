'use strict';

const net = require('net');
require('dotenv').config();


const client = new net.Socket(); // create a socket connection 
// connect it to CAPS-server.js : localhost port: 4000;

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

client.connect(port, host, () => {
    console.log(" Driver client is connected ... ")
});

client.on('data', (data) => {
    let jsonEventData = JSON.parse(data);
    console.log(new Date(), jsonEventData.message);

    if (jsonEventData.event === 'pickup') {
        setTimeout(() => {
            console.log(`DRIVER: picked up ${jsonEventData.payload.orderId}.`);
            const message = {
                event: 'in-transit',
                payload: jsonEventData.payload,
            };

            let msg = JSON.stringify(message);
            client.write(msg);
        }, 1000);

        setTimeout(() => {
            console.log(`DRIVER: delivered ${jsonEventData.orderId}.`);
            const messageObject = {
              event: 'delivered',
              payload: jsonEventData.payload,
            };
      
            let msg = JSON.stringify(messageObject);
            client.write(msg);
          }, 3000);
    }

});
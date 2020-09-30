'use strict';

const net = require('net'); // no need for install
require('dotenv').config();


const uuid = require('uuid').v4;  ///npm i uuid
const server = net.createServer();
// run the server 
// Accept inbound TCP connections on a declared port
const port = process.env.PORT || 4000;
server.listen(port, ()=> console.log(`server is running on ${port}`));

// Creates a pool of connected clients
let socketPool = {}; //store all the connected clients

// add some event listeners : on connection 
// when clients connect to us trigger a callback
server.on('connection', (socket)=> {
    console.log("user is online!!! " + socket);
    // a specific connection; the connection with the logger 
    // I want to be able to listen on that connection
    // {
    //     socket-connection-1: socket 
    //     socket-connection-2: socket
    // }
    
    const id = `Socket-${uuid()}`;  //`Socket-${Math.random()}`;
    console.log("id >>>>>>> ", id)
    socketPool[id] = socket; // add property to the obj

    // On incoming data from a client \/\/Read and parse the incoming data/payload
    socket.on('data', buffer => {
        // encoded buffer
        console.log("buffer//payload >>>> ",buffer);
        // parse buffer
        let eventMsg = JSON.parse(buffer.toString());
        const msgTime = new Date().toLocaleTimeString();
        console.log("msg >>>>>> ", eventMsg , msgTime); 
        ////Verify that the data is legitimate /\/\ Is it a JSON object with both an event and payload properties?
        if(eventMsg.event && eventMsg.payload) {
            broadcast(eventMsg);
          }
        // if (msg.event == 'pickup' || msg.event == 'in-transit' || msg.event == 'delivered'){
        //     broadcast(eventMsg);
        // }
        
    });

    // server.on('error', (e)=> {
    //     console.log("ERROR !!!!!!! ", e)
    // })

    server.on('close', ()=> {
        delete socketPool[id];
    })
});

function broadcast(eventMsg) {
    console.log(" -------------- 1");
    let payload = JSON.stringify(eventMsg);
    console.log(" -------------- 2 payload after strigfy in broadcast ", payload)
    for (let id in socketPool) {
        console.log(" ---------LOOPING-----***** ", id )
        socketPool[id].write(payload);
    }
    console.log(" -------------- 3")
}


module.exports = server;
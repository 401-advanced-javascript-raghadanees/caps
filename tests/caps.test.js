// 'use strict';
// const event = require('../events.js');
// let server = require('../CAPS-Server/caps.js');


// afterAll(done => {
//   server.close();
//   done();
// });

// describe('Events Handler' , ()=>{

//   let consoleSpy = jest.spyOn(console, 'log').mockImplementation();


//   console.log('consoleSpy',consoleSpy);

//   it('pickup', () => {
//     event.emit('pickup',{});
//     expect(consoleSpy).toHaveBeenCalled();
//   });
  

//   it('in-transit', () => {
//     event.emit('in-transit',{});
//     expect(consoleSpy).toHaveBeenCalled();
//   });
  
//   it('delivered', () => {
//     event.emit('delivered',{});
//     expect(consoleSpy).toHaveBeenCalled();
//   });

// });
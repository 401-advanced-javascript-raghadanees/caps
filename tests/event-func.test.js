// 'use stritc';
// const events = require('../events');
// let log = require('../caps');
// let pickup = require('../driver');
// let thanksFuc = require('../vendor');
// let consoleSpy = jest.spyOn(console, 'log').mockImplementation();

// describe('Events handlers tests-------------------->', ()=> {
//   let payload = {
//     storeName: 'myStore',
//     orderId: 2222,
//     customer: 'R',
//     address: 'Amman',
//     phoneNumber: '1111',
//   };
   
//   it('pickup Event   ..........>', () => {
//     events.emit('pickup', payload);
//     expect(consoleSpy).toHaveBeenCalled();
//   });
  
//   it('in-transit Event   ..........>', () => {
//     events.emit('in-transit', payload);
//     expect(consoleSpy).toHaveBeenCalled();
//   });
   
//   it('log function in caps   ..........>', ()=> {
//     let event = 'pickup';
//     log(event,payload);
//     expect(consoleSpy).toHaveBeenCalled();
//   });
  
//   it(' thanks function in vendor   ..........>', ()=> {
//     thanksFuc(payload);
//     expect(consoleSpy).toHaveBeenCalled();
//   });
//   it(' pickup function in driver   ..........>', ()=> {
//     pickup(payload);
//     expect(consoleSpy).toHaveBeenCalled();
//   });
  
//   it(' delivered   ..........>', () => {
//     events.emit('delivered', payload);
//     expect(consoleSpy).toHaveBeenCalled();
//   });
  
    
    
// });
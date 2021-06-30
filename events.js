var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('hello',function(name){
  console.log('Hello', name);
})

eventEmitter.on('hay',function(){
  console.log('How Are You');
})

eventEmitter.emit('hello','Dharmik');
eventEmitter.emit('hay');
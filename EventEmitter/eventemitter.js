//Class EventEmitter
const EventEmitter=require('events');
//Create an object myemitter
const myemitter = new EventEmitter();

//Most famous methods are:
/*listener (on)
Arguments: string, callback function
*/

myemitter.on('messageLogged',function(){
    console.log('Listener called');
});



/*emit
Produce something, making a noise, 
signalling that an event is happening
*/
myemitter.emit('messageLogged');


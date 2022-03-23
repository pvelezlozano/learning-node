//Built-in Module
//CORE BUILDING PART OF NODE
//EventEmitter is a CLASS
const EventEmitter = require('events');
//If you want to create something custom, you extend the class

//Create an instance
const customEmitter= new EventEmitter();

//On: listens for an emitt
//The string is the name of the event
customEmitter.on('response',(name,id)=>{
    console.log('Data Received',name,id);

});
//We can have as many methods that we like 
//with as many functions we like
customEmitter.on('response',()=>{
    console.log('Another logic');

});

customEmitter.on('response',()=>{
    console.log('Some other logic');

});

//Once we have subscribed to the event, we emit it
//The name (response) has to match
//The emit has to be all the way to the bottom
//We can give arguments to the callback function (john,34)
customEmitter.emit('response', 'john',34);

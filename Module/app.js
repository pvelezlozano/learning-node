//Modules
//Split up code in several files
//Encapsulated COde (only share minimum)
//CommonJS, every file is module (by default)

const names = require('./names');
const sayHi = require('./utils')
const data=require('./alternative-flavor')

//Data is an object with a list and another object
console.log(data);
//Names is an object that includes the vars john and peter
console.log(names);
//sayHi is a function
console.log(sayHi);

//sayHi('susan');
//sayHi(names.john);
//sayHi(names.peter);

//This prints the function
//When you require a file, you invoke it!!!
require('./mind-grenade')
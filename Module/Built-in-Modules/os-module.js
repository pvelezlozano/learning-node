/*Interacting with the server and the OS */
//OS
//PATH
//FS
//HTTP

//Here were not doing ./
const os = require('os');

//Info about the current user
const user = os.userInfo();
console.log(user);
//Method returns the system uptime in seconds
console.log('The System Uptime is '+os.uptime() + ' seconds');
//Object to print some of them
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);


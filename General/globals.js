//GLOBALS - NO WINDOW!!!!!

//__dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about environment where the program is being executed

/* These are not the only ones but atm 
these ones will be enough*/

//There's no window in Node because there is no browser

console.log(__dirname);
console.log(__filename);
//console.log(require);
console.log(process['versions']);

//Set interval in JS
setInterval(()=>{
    console.log('hello world');
},1000)
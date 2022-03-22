
//Asynchronous
//Even with timeout 0, it still runs after
console.log('first task');
setTimeout(()=>{
    console.log('second task');
},0);
console.log('next task');


//Set Interval
setInterval(()=>{
    console.log('hello world');
},2000);
console.log('this happens')
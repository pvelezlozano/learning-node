//Streams are used to read or write sequentially
//Handle big files

/*4 types: 
Writeable
Readable
Transform
*/

//Many built-in modules create streams
//Streams extend event emitters



const {createReadStream}=require('fs');
const BufferSize=90000;
const stream = createReadStream('./big.txt', 
{
    highWaterMark:BufferSize, 
    encoding:'utf8'
});

//default 64kb
//last buffer - remainder
//highWaterMark - control size

stream.on('data',(result)=>{
    console.log(result)
});


stream.on('error',(err)=>console.log(err));
const {readFile,writeFile}=require('fs').promises
// const util=require('util');
// const readFilePromise=util.promisify(readFile);
// const writeFilePromise=util.promisify(writeFile);


const start=async()=>{
    try{
        const first=await readFile('./test.txt','utf-8');
        const second=await readFile('./test2.txt','utf8');
        await writeFile('./result.txt','data'+first+second);
        console.log(first,second);
    }catch(error){
        console.log(error);
    }
    
}
start();

// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if (err){
//                 reject(err);
//             }
//             resolve(data);
//         })
//     });
// }


// getText('./test.txt')
// .then(result=>console.log(result))
// .catch(err=>console.log(err))
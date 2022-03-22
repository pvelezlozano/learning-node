//Non blocking code
const {readFile,writeFile}=require('fs');

console.log('start')

//Callbacks: We run a callback when we're done

//We add a callback on this function
readFile('./content/first.txt','utf-8',(err,result)=>{
    if (err){
        console.log(err)
        return;
    }
    const first_text = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err)
            return;
        }
        const second_text = result;
        const result_text='Here is the result : '+first_text+','+second_text;
        writeFile('./content/result-async.txt',result_text,(err,result)=>{
            if (err){
                console.log(err);
                return;
            }
            console.log('done')
        })
    })
})

console.log('starting next task')

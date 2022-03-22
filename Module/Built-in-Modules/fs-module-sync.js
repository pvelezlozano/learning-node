//Blocking code
console.log('start');

const {readFileSync,writeFileSync}=require('fs');
//Read files and print them
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');
//////console.log(first,second);
//By default, writefile overrides
//If we want to avoid this and append, we create an object
const file_option={
    flag:'a'
}
const result_text='Here is the result : '+first+','+second;
writeFileSync('./content/result-sync.txt',result_text,file_option);

console.log('done with the task')
console.log('starting the next one');







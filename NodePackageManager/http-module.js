const http = require('http');
//req: Request Object
//res: What we're sending back
const server=http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('Welcome to our home page');
    }
    if (req.url==='/about'){
        res.end('This is our about page');
    }
    res.end('<h1>Oops!</h1><p>This page does not exist</p>');
});
server.listen(5000);

//res.end() ends the response process
//Use to quickly end the response without any data
const http=require('http')
const server=http.createServer((request,response)=>{
     response.write('<h1>Hello Node!!!!</h1>\n');
     response.end();
});
server.listen(3000,()=>console.log("server running") )
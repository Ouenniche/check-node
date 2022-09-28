const fs=require('fs')


// fs.writeFile('welcome.txt','Hello Node',(err)=>{
//     if (err) {
//         console.log('error');
//     }
//     console.log('file Created');
// });

fs.readFile('welcome.txt','utf-8',(err,data)=>{
    if(err) {
        console.log(err);
    }
    console.log(data);
})
console.log("program ended!!")
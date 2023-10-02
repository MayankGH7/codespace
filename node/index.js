const fs = require('fs')
console.log('Codespace created successfully...')
console.log('Hello, user')
fs.readFile('./new.txt',(err,data)=>{
    console.log(data)
})
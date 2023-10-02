console.log('Codespace created successfully...')
console.log('Hello, user')
import fs from 'fs'
fs.readFile('./new.txt',(err,data)=>{
    console.log(data)
})
const fs = require("fs")

console.log(((process.hrtime()[0]/60).toFixed(5)))
console.log("Antes da leitura do arquivo")

fs.readFileSync('file.txt')

console.log("Executing console before archive")
console.log(((process.hrtime()[0]/60).toFixed(5)))

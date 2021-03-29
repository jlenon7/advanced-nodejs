const fs = require("fs")

console.log(((process.hrtime()[0]/60).toFixed(5)))
console.log("Antes da leitura do arquivo")

fs.readFile("file.txt", (err, data) => {
  if (err) throw err
  console.log("File reading finished!")
})

console.log("Executing console before archive")
console.log(((process.hrtime()[0]/60).toFixed(5)))

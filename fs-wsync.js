const fs = require("fs")

console.log(((process.hrtime()[0]/60).toFixed(5)))
console.log("After file read")

fs.readFile("file.txt", (err) => {
  if (err) throw err
  console.log("File reading finished!")
})

console.log("Executing console before archive")
console.log(((process.hrtime()[0]/60).toFixed(5)))

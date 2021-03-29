const fs = require("fs")

fs.readFile("file2.txt", (err, data) => {
  if (err) throw err

  console.log(data)
  fs.unlink("file2.txt", (err) => {
    if(err) throw err
    console.log("Archive deleted")
  })
})



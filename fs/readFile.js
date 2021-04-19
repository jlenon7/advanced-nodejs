const fs = require('fs')

const path = __dirname + '/' + 'text.txt'

// Non Blocking
fs.readFile(path, (err, data) => {
    if (err) throw err

    // Buffer
    console.log('Non Blocking: ', data)

    // Real data inside file
    console.log(data.toString())
})

// Blocking
console.log('Blocking: ', fs.readFileSync(path))

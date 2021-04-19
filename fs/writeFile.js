const { writeFile } = require('fs')

const path = __dirname + '/' + 'archive.txt'
writeFile(path, 'Creating archive using writeFile', err => {
    if (err) throw err

    console.log('Archive successfully created!')
})

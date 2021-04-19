const { writeFile } = require('fs')

function createArchive(name, content) {
    return new Promise((resolve, reject) => {
        writeFile(name, content, err => {
            if (err) return reject(err)

            resolve()
        })
    })
}

createArchive(__dirname + '/' + 'promiseArchive.txt', 'Creating archive using promises')
    .then(() => console.log('Archive promiseArchive.txt successfully created'))
    .catch(err => console.log(err))

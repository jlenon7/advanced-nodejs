const fs = require('fs')

const assets = ['css', 'js', 'images', 'fonts', 'lib']

function make(root, directories) {
    directories.forEach(item => {
        const subDirectory = `${root}/${item}`
        const path = __dirname + '/' + subDirectory

        fs.mkdir(path, { recursive: true }, (err) => {
            if (err) throw err

            console.log('Directory successfully created!:', subDirectory)
        })
    })
}

make('assets', assets)

const { promisify } = require('util')

const writeFile = promisify(require('fs').writeFile)
const content = "function main() {\n  console.log('Hello!')\n}\n\nmain()\n"

writeFile(__dirname + '/' + 'utils.js', content)
    .then(() => console.log('Archive successfully created!'))
    .catch(err => console.log(`Error: ${err}`))

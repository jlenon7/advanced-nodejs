const path = require('path')

console.log(path.basename('/test/algo/global.js'))
console.log(path.normalize('../\/global.js'))
console.log(path.join('/test', 'test2', 'test3/test4', 'dir2', '..'))
console.log(path.resolve('../global.js'))
console.log(path.extname('../global.js'))

const http = require('http')

const { readFile } = require('fs')

const host = '127.0.0.1'
const port = 3000
const url = `http://${host}:${port}`

let content = ''

readFile(__dirname + '/' + 'index.html', (err, data) => {
    if (err) throw err

    content = data
})

const server = http.createServer((request, response) => {
    response.statusCode = 200
    response.setHeader('Content-type', 'text/html')

    response.end(content)
})

server.listen(port, host, () => {
    console.log('Server listening')
})

require('child_process').exec('xdg-open' + ' ' + url)

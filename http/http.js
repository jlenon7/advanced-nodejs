const http = require('http')

const port = 3000
const hostname = '127.0.0.1'
const url = `http://${hostname}:${port}`

const server = http.createServer((request, response) => {
    response.statusCode = 200;

    // Headers
    response.setHeader('Content-Type', 'text/html')

    response.end('<h1>Welcome to Node.js!</h1>')
})

server.listen(port, hostname, () => {
    // Open the application in browser using xdg-open of linux
    require('child_process').exec('xdg-open' + ' ' + url)

    console.log(`Server listening in ${url}`)
})
